<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		brandName: string;
		children?: Snippet;
	};

	let { brandName, children }: Props = $props();
</script>

{#if children}
	<a
		href="/"
		class="flex max-h-16 items-center justify-center space-x-2 transition-none"
	>
		{@render children()}
		<h1 class="text-xl font-bold">{brandName}</h1>
	</a>
{:else}
	<a href="/">
		<h1 class="max-h-16 text-xl font-bold">{brandName}</h1>
	</a>
{/if}

<style>
	a {
		view-transition-name: main-nav-link;
	}
</style>
