<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    Flex,
    Page,
    Steps,
    Step,
    Text,
  } from "$lib/index.js";

  let activeStep1 = $state('step1');
  let activeStep2 = $state('step1');
  let activeStep3 = $state('step1');
  let activeStep4 = $state('step1');
  let activeStep5 = $state('step1');
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Steps</Text>
    <Text>A steps component for guiding users through multi-step processes.</Text>
  </Flex>

</Page>