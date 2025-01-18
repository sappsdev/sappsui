<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  type Props = {
    icon: IconifyIcon | string;
    class?: string;
  };
  const { icon, class: className }: Props = $props();
</script>

<Icon {icon} class={className} />
