<script lang="ts">
  import { page } from "$app/state";
  import { Flex, Text } from "$lib/index.js";
  const onclick = () => {
    history.back();
  };
</script>

<Flex direction="column" class="center">
  <Text variant="h1">Oops!</Text>
  <Text>{page.status}</Text>
  <Text>{page.error?.message}</Text>
  <button {onclick}>Back</button>
</Flex>
