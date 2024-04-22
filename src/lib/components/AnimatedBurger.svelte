<script lang="ts">
	// import { hamburgerBtn } from "./navstate.svelte";
	import { navStore } from '$lib/stores';

	function handleClick() {
		navStore.menuIsOpen = !navStore.menuIsOpen;
	}
</script>

<button
	id="hamburger"
	class={'fixed right-2 top-2 z-50 inline-block size-12 cursor-pointer rounded-md ring-2 xs:hidden'}
	class:isopen={navStore.menuIsOpen}
	onclick={handleClick}
>
	<svg
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width="5"
	>
		<path
			class="top"
			d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
		/>
		<path class="middle" d="m 30,50 h 40"></path>
		<path
			class="bottom"
			d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>

<style>
	:root {
		--transition-duration: 400ms;
	}

	button {
		&.isopen {
			svg,
			.middle {
				rotate: 45deg;

				.top,
				.bottom {
					stroke-dashoffset: -64px;
				}

				.middle {
					rotate: 90deg;
				}
			}
		}
	}

	input {
		display: none;
	}

	svg {
		position: absolute;
		inset: 0;
	}

	.top {
		stroke-dasharray: 40 160;
	}
	.middle {
		transform-origin: center;
	}
	.bottom {
		stroke-dasharray: 40 85;
	}

	.top,
	.bottom {
		transition: stroke-dashoffset var(--transition-duration) ease-out;
	}

	svg,
	.middle {
		transition: rotate var(--transition-duration) ease;
	}
</style>
