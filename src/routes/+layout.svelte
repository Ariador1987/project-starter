<script lang="ts">
	import '@fontsource-variable/shantell-sans';
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { Head, Navbar, Main, Footer } from './';
	import { Backdrop } from '$components';
	import { navStore } from '$lib/stores';
	import { navLinks } from '$lib/data';
	import { goto, onNavigate } from '$app/navigation';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	$effect(() => {
		// Add data-testid now that our app is hydrated
		// We have Playwright "wait" for this before starting the tests
		document.documentElement.dataset.testid = 'hydrated';
	});

	// $inspect($page.data, ' logging data');
	onNavigate((navigation) => {
		return new Promise((resolve) => {
			if (!document.startViewTransition) {
				resolve();
				return;
			}

			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{#snippet navLink(name, path)}
	<li>
		<a
			href={path}
			class="px-2 font-semibold"
			onclick={(e: Event) => {
				navStore.menuIsOpen = false
			}}>{name}</a
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
