<script lang="ts">
	import { page } from '$app/stores';
	import { navLinks } from '$lib/data';
	import { Hero } from '.';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<main class="mt-16 grow bg-gray-200 dark:bg-black">
	{#if $page?.route?.id === navLinks.find((navLink) => navLink.name === 'Home')?.path}
		<Hero />
	{/if}
	<div class="container max-w-6xl py-4">
		{@render children()}
	</div>
</main>
