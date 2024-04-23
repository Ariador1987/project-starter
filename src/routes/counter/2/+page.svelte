<script lang="ts">
	function createCount(initial: number) {
		let value = $state({ initial });

		const increaseCount = () => {
			value.initial++;
		};

		return {
			value,
			increaseCount,
		};
	}

	// Sa Destruktiriranjem ne radi - mora biti vraćen objekt
	const { value, increaseCount } = createCount(5);
</script>

<h2>Hello from Counter</h2>
<p>The count is: {value.initial}</p>
<button class="btn btn-primary" onclick={increaseCount}>Increase count</button>
