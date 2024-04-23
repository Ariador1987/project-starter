<script lang="ts">
	import { AnimatedBurger, MainHeading, NavLinksWrapper } from '$components';
	import logoBoja from '$lib/images/logoBoja.svg?enhanced';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<nav
	class="fixed left-0 right-0 top-0 z-30 flex items-center justify-center bg-primary/50 backdrop-blur-md"
>
	<div class="container flex h-16 max-w-6xl items-center justify-between">
		<MainHeading brandName={'2B'}>
			<img src={logoBoja} alt="Logo" class="size-12" />
		</MainHeading>
		<NavLinksWrapper>
			{#if children}
				{@render children()}
			{/if}
		</NavLinksWrapper>
		<AnimatedBurger />
	</div>
</nav>

<style lang="postcss">
	nav {
		view-transition-name: main-nav;
	}

	nav div {
		view-transition-name: main-nav-container;
	}
</style>
