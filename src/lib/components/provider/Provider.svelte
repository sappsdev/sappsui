<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
    twitterHandle?: string;
    locale?: string;
  };
  const {
    children,
    title,
    description,
    keywords,
    author,
    image,
    url,
    type = "website",
    siteName = "My Site Name",
    twitterHandle,
    locale = "en_EN",
  }: Props = $props();
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  {#if author}<meta name="author" content={author} />{/if}

  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  {#if image}<meta property="og:image" content={image} />{/if}
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content={locale} />

  <meta name="twitter:card" content="summary_large_image" />
  {#if twitterHandle}<meta name="twitter:site" content={twitterHandle} />{/if}
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  {#if image}<meta name="twitter:image" content={image} />{/if}

  <link rel="canonical" href={url} />
</svelte:head>
{@render children?.()}
