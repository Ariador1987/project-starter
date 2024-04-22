<script lang="ts">
	import { navStore } from '$lib/stores';
</script>

<div
	role="presentation"
	class="fixed inset-0 z-30 bg-base-300/50 backdrop-blur-sm"
	onclick={() => (navStore.menuIsOpen = false)}
></div>
