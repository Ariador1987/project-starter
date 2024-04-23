<script lang="ts">
	let count = $state(0);
</script>

<h2>Hello from Counter</h2>
<p>The count is: {count}</p>
<button class="btn btn-primary" onclick={() => count++}>Increase count</button>
