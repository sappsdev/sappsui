<script lang="ts">
  import { Layout } from "$lib/index.js";

  let { children } = $props();
</script>

<Layout.Body class="boxed">
  <Layout.Main>
    {@render children()}
  </Layout.Main>
</Layout.Body>
