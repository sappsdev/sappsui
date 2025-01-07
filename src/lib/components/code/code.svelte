<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import Prism from "prismjs";
  import "prismjs/themes/prism-tomorrow.min.css";

  type Props = {
    code?: string;
    lang?: string;
    class?: string;
  };
  let { class: className, code, lang = "javascript" }: Props = $props();
</script>

<div class={cn("w-full bg-slate-800 p-3 rounded-md", className)}>
  <pre><code class="language-{lang}"
      >{@html Prism.highlight(code || "", Prism.languages[lang], lang)}</code
    ></pre>
</div>
