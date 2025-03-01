<script lang="ts">
  import { Card, CardBody, Flex, Page, Text, Dropzone } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Dropzone</Text>
    <Text>A versatile file upload component with drag and drop support.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Dropzone</Text>
    <Card>
      <CardBody>
        <Dropzone />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropzone color="primary" label="Primary Dropzone" />
        <Dropzone color="secondary" label="Secondary Dropzone" />
        <Dropzone color="accent" label="Accent Dropzone" />
        <Dropzone color="info" label="Info Dropzone" />
        <Dropzone color="success" label="Success Dropzone" />
        <Dropzone color="warning" label="Warning Dropzone" />
        <Dropzone color="danger" label="Danger Dropzone" />
        <Dropzone color="muted" label="Muted Dropzone" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropzone variant="flat" label="Flat Variant" />
        <Dropzone variant="bordered" label="Bordered Variant" />
        <Dropzone variant="faded" label="Faded Variant" />
        <Dropzone variant="underlined" label="Underlined Variant" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Dropzone size="s-sm" label="Small Size" />
        <Dropzone size="s-md" label="Medium Size" />
        <Dropzone size="s-lg" label="Large Size" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Dropzone radius="r-none" label="No Radius" />
        <Dropzone radius="r-sm" label="Small Radius" />
        <Dropzone radius="r-md" label="Medium Radius" />
        <Dropzone radius="r-lg" label="Large Radius" />
        <Dropzone radius="r-xl" label="Extra Large Radius" />
        <Dropzone radius="r-full" label="Full Radius" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">States</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropzone disabled label="Disabled State" />
        <Dropzone error="Error uploading files" label="Error State" />
        <Dropzone info="Only images and PDFs allowed" label="With Info" />
        <Dropzone
          label="Custom Configuration"
          maxSize={5 * 1024 * 1024}
          maxFiles={3}
          info="Max 5MB per file, up to 3 files"
        />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">File Types</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropzone
          label="Images Only"
          accept="image/*"
          info="Accepts all image formats"
        />
        <Dropzone
          label="PDFs Only"
          accept="application/pdf"
          info="Accepts PDF files only"
        />
        <Dropzone
          label="Multiple Types"
          accept="image/*,.pdf,.doc,.docx"
          info="Images, PDFs and Word documents"
        />
        <Dropzone
          label="Single File Upload"
          multiple={false}
          info="Only one file at a time"
        />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Cloud Storage</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropzone
          label="Upload to R2"
          uploadToStorage={true}
          storageType="r2"
          info="Files will be uploaded to Cloudflare R2"
        />
        <Dropzone
          label="Upload to S3"
          uploadToStorage={true}
          storageType="s3"
          info="Files will be uploaded to Amazon S3"
        />
      </CardBody>
    </Card>
  </Flex>
</Page>