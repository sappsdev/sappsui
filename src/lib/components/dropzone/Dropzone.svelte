<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { Image } from "$lib/index.js";
  import { createEventDispatcher } from "svelte";

  type Props = {
    class?: string;
    label?: string;
    info?: string;
    error?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?:
      | "muted"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "danger";
    size?: "s-sm" | "s-md" | "s-lg";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";
    accept?: string;
    multiple?: boolean;
    maxSize?: number; // in bytes
    maxFiles?: number;
    disabled?: boolean;
    uploadToStorage?: boolean;
    storageType?: "r2" | "s3";
    storageConfig?: {
      endpoint?: string;
      region?: string;
      bucket?: string;
      accessKeyId?: string;
      secretAccessKey?: string;
    };
  };

  const {
    class: className,
    label = "Drag and drop files here or click to browse",
    info,
    error,
    variant = "bordered",
    color = "primary",
    size = "s-md",
    radius = "r-md",
    shadow = "sh-sm",
    accept = "image/*,application/pdf",
    multiple = true,
    maxSize = 10 * 1024 * 1024, // 10MB
    maxFiles = 5,
    disabled = false,
    uploadToStorage = false,
    storageType = "r2",
    storageConfig = {},
  }: Props = $props();

  const dispatch = createEventDispatcher();

  let files = $state<File[]>([]);
  let previews = $state<{ file: File; url: string }[]>([]);
  let dragOver = $state(false);
  let uploading = $state(false);
  let uploadProgress = $state<{ [key: string]: number }>({});
  let fileInput: HTMLInputElement;
  let errorMessage = $state("");

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    dragOver = true;
  }

  function handleDragLeave() {
    dragOver = false;
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    dragOver = false;
    if (disabled || !event.dataTransfer) return;

    handleFiles(Array.from(event.dataTransfer.files));
  }

  function handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;

    handleFiles(Array.from(target.files));
    // Reset input to allow selecting the same file again
    target.value = "";
  }

  function handleFiles(newFiles: File[]) {
    errorMessage = "";

    // Check max files limit
    if (files.length + newFiles.length > maxFiles) {
      errorMessage = `Maximum ${maxFiles} files allowed`;
      return;
    }

    // Filter files by size and type
    const validFiles = newFiles.filter((file) => {
      // Check file size
      if (file.size > maxSize) {
        errorMessage = `File ${file.name} exceeds maximum size of ${formatSize(maxSize)}`;
        return false;
      }

      // Check file type if accept is specified
      if (accept && accept !== "*") {
        const acceptedTypes = accept.split(",").map((type) => type.trim());
        const fileType = file.type;

        // Check if file type matches any of the accepted types
        const isAccepted = acceptedTypes.some((type) => {
          if (type.endsWith("/*")) {
            // Handle wildcard mime types like image/*
            const category = type.split("/")[0];
            return fileType.startsWith(`${category}/`);
          }
          return (
            type === fileType ||
            (type.startsWith(".") && file.name.endsWith(type))
          );
        });

        if (!isAccepted) {
          errorMessage = `File ${file.name} has an unsupported format`;
          return false;
        }
      }

      return true;
    });

    if (validFiles.length === 0) return;

    // Add files to the list
    if (multiple) {
      files = [...files, ...validFiles];
    } else {
      files = [validFiles[0]];
    }

    // Create previews for image files
    validFiles.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const url = e.target?.result as string;
          previews = [...previews, { file, url }];
        };
        reader.readAsDataURL(file);
      } else {
        // For non-image files, use a generic preview or icon
        previews = [...previews, { file, url: getFileIconByType(file.type) }];
      }
    });

    // Dispatch event with selected files
    dispatch("filesSelected", { files });

    // Auto upload if configured
    if (uploadToStorage) {
      uploadFiles();
    }
  }

  function removeFile(index: number) {
    if (uploading) return;

    const removedFile = files[index];
    files = files.filter((_, i) => i !== index);
    previews = previews.filter((p) => p.file !== removedFile);

    dispatch("fileRemoved", { file: removedFile, remainingFiles: files });
  }

  async function uploadFiles() {
    if (files.length === 0 || uploading) return;

    uploading = true;
    uploadProgress = {};
    errorMessage = "";

    try {
      dispatch("uploadStart", { files });

      const uploadPromises = files.map(async (file, index) => {
        // Initialize progress for this file
        uploadProgress[file.name] = 0;

        try {
          const uploadedUrl = await uploadToCloudStorage(file, (progress) => {
            uploadProgress[file.name] = progress;
          });

          return { file, url: uploadedUrl, success: true };
        } catch (error) {
          console.error(`Error uploading ${file.name}:`, error);
          return { file, error, success: false };
        }
      });

      const results = await Promise.all(uploadPromises);

      // Check if all uploads were successful
      const allSuccessful = results.every((result) => result.success);
      const successfulUploads = results.filter((result) => result.success);
      const failedUploads = results.filter((result) => !result.success);

      if (allSuccessful) {
        dispatch("uploadSuccess", {
          files,
          urls: results.map((r) => r.url),
        });
      } else {
        errorMessage = `${failedUploads.length} file(s) failed to upload`;
        dispatch("uploadPartial", {
          successful: successfulUploads,
          failed: failedUploads,
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      errorMessage = "Upload failed. Please try again.";
      dispatch("uploadError", { error });
    } finally {
      uploading = false;
    }
  }

  async function uploadToCloudStorage(
    file: File,
    onProgress: (progress: number) => void
  ): Promise<string> {
    // This is a placeholder implementation
    // In a real application, you would implement the actual upload logic to R2 or S3

    return new Promise((resolve, reject) => {
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        onProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);
          // Return a simulated URL
          resolve(`https://storage.example.com/${file.name}`);
        }
      }, 300);
    });
  }

  function formatSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  function getFileIconByType(type: string): string {
    // Return appropriate icon URL based on file type
    if (type.startsWith("image/")) {
      return "/icons/image-file.svg";
    } else if (type === "application/pdf") {
      return "/icons/pdf-file.svg";
    } else if (type.startsWith("text/")) {
      return "/icons/text-file.svg";
    } else if (type.startsWith("video/")) {
      return "/icons/video-file.svg";
    } else if (type.startsWith("audio/")) {
      return "/icons/audio-file.svg";
    } else {
      return "/icons/document-file.svg";
    }
  }

  function handleClick() {
    if (!disabled && fileInput) {
      fileInput.click();
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class={cn(
    "dropzone",
    variant,
    color,
    size,
    radius,
    shadow,
    dragOver && "drag-over",
    disabled && "disabled",
    className
  )}
  ondragover={handleDragOver}
  ondragleave={handleDragLeave}
  ondrop={handleDrop}
  onclick={handleClick}
>
  <input
    type="file"
    bind:this={fileInput}
    {accept}
    {multiple}
    {disabled}
    onchange={handleFileInput}
    class="file-input"
  />

  {#if files.length === 0}
    <div class="dropzone-placeholder">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </div>
      <div class="label">{label}</div>
      {#if info}
        <div class="info">{info}</div>
      {/if}
    </div>
  {:else}
    <div class="file-list">
      {#each previews as preview, i}
        <div class="file-item">
          <div class="file-preview">
            {#if preview.file.type.startsWith("image/")}
              <Image src={preview.url} alt={preview.file.name} radius="r-md" />
            {:else}
              <div class="file-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
            {/if}
            <div class="file-info">
              <div class="file-name">{preview.file.name}</div>
              <div class="file-size">{formatSize(preview.file.size)}</div>
            </div>
            {#if uploading && uploadProgress[preview.file.name] !== undefined}
              <div class="progress-bar">
                <div
                  class="progress"
                  style="width: {uploadProgress[preview.file.name]}%"
                ></div>
              </div>
            {/if}
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button
              type="button"
              class="remove-button"
              onclick={() => removeFile(i)}
              disabled={uploading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      {/each}

      {#if multiple && files.length < maxFiles}
        <div class="add-more" onclick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Add more files</span>
        </div>
      {/if}
    </div>
  {/if}

  {#if errorMessage}
    <div class="error-message">{errorMessage}</div>
  {/if}
  {#if error}
    <div class="error-message">{error}</div>
  {/if}
</div>
