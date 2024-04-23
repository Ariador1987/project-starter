<script lang="ts">
	function createCount() {
		let count = $state(0);
		let double = $derived(count * 2);

		function increaseCount() {
			count++;
		}

		return {
			increaseCount,
			get count() {
				return count;
			},
			get double() {
				return double;
			},
		};
	}

	const data = createCount();
</script>

<h2>Hello from Counter</h2>
<p>The count is: {data.count}</p>
<p>The double is: {data.double}</p>
<button class="btn btn-primary" onclick={data.increaseCount}
	>Increase count</button
>
