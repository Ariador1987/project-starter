<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta property="og:description" content={$page.data.description ?? ''} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Project Starter" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content="/og.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:title" content={$page.data.title ?? ''} />
	<title>{$page.data.title ?? ''}</title>
</svelte:head>
