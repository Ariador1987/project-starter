<script lang="ts">
	import '@fontsource-variable/shantell-sans';
	import '../app.css';
	import { Head, Navbar, Main, Footer } from './';
	import type { Snippet } from 'svelte';
	import { Backdrop } from '$components';
	import { navStore } from '$lib/stores';
	import { page } from '$app/stores';
	import { navLinks } from '$lib/data';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	$effect(() => {
		// Add data-testid now that our app is hydrated
		// We have Playwright "wait" for this before starting the tests
		document.documentElement.dataset.testid = 'hydrated';
	});

	$effect(() => console.log($page));
</script>

{#snippet navLink(name, path)}
	<li>
		<a
			href={path}
			class="px-2 py-1"
			onclick={() => (navStore.menuIsOpen = false)}>{name}</a
		>
	</li>
{/snippet}

<Head />

{#if navStore.menuIsOpen}
	<Backdrop />
{/if}

<Navbar>
	{#each navLinks as { name, path }}
		{@render navLink(name, path)}
	{/each}
</Navbar>

<Main>
	{@render children()}
</Main>

<Footer />
