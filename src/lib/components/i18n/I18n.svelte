<script lang="ts">
  import { t } from "svelte-i18n";

  type Props = {
    key?: string;
    props?: Record<string, string>;
  };
  const { key, props }: Props = $props();
</script>

{$t(key || "text", props && { values: props })}
