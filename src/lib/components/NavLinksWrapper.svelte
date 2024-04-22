<script lang="ts">
	import type { Snippet } from 'svelte';
	import { XS_SIZE_LIMIT } from '$lib';
	import { navStore } from '$lib/stores';

	type Device = 'mobile' | 'non-mobile';
	type Props = {
		children: Snippet;
	};

	let innerWidth = $state(0);
	let screen: Device = $derived(
		innerWidth > XS_SIZE_LIMIT ? 'non-mobile' : 'mobile',
	);

	let { children }: Props = $props();
	let listEl: HTMLUListElement;

	let timeoutId: NodeJS.Timeout;
	function handleResize() {
		clearTimeout(timeoutId);

		listEl.style.display = 'none';
		listEl.classList.remove('mobile');

		timeoutId = setTimeout(() => {
			listEl.style.display = 'flex';

			if (screen === 'mobile') {
				listEl.classList.add('mobile');
			}
		}, 50);
	}
</script>

<svelte:window bind:innerWidth onresize={handleResize} />

<ul
	bind:this={listEl}
	class:mobile={screen === 'mobile'}
	class:non-mobile={screen === 'non-mobile'}
	class:open={screen === 'mobile' && navStore.menuIsOpen}
	class:closed={screen === 'mobile' && !navStore.menuIsOpen}
>
	{#if children}
		{@render children()}
	{/if}
</ul>

<style lang="postcss">
	.mobile {
		@apply fixed bottom-0 right-0 top-0 z-40 flex h-screen w-3/4 flex-col items-start justify-start gap-5 bg-primary px-16 pt-32 text-2xl transition duration-200;
	}

	.non-mobile {
		@apply relative z-40 flex items-center justify-center gap-3 uppercase;
	}

	.open {
		@apply translate-x-0;
	}

	.closed {
		@apply translate-x-full;
	}
</style>
