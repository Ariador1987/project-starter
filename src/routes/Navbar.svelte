<script lang="ts">
	import { AnimatedBurger, MainHeading, NavLinksWrapper } from '$components';
	import logoBoja from '$lib/images/logoBoja.svg?enhanced';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<nav class="fixed left-0 right-0 top-0 z-30 bg-primary/50">
	<div class="container flex max-w-6xl items-center justify-between p-2">
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
