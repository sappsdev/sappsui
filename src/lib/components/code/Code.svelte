<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import Prism from "prismjs";
  import "prismjs/themes/prism-tomorrow.min.css";

  type Props = {
    code?: string;
    lang?: string;
    class?: string;
  };
  let { class: className, code, lang = "javascript" }: Props = $props();
</script>

<div class={cn("card bg-slate-800 rounded-xl", className)}>
  <pre class="card-body overflow-x-auto whitespace-pre p-3"><code
      class="whitespace-pre code language-{lang} block bg-slate-800 p-3"
      >{@html Prism.highlight(code || "", Prism.languages[lang], lang)}</code
    ></pre>
</div>
