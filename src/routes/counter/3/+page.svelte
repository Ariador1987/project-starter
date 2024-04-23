<script lang="ts">
	class Counter {
		counter = $state(0);

		constructor() {}

		increaseCount() {
			this.counter++;
		}
	}

	const count = new Counter();

	$inspect(count.counter);
</script>

<h2>Hello from Counter</h2>
<p>The count is: {count.counter}</p>
<button class="btn btn-primary" onclick={() => count.increaseCount()}
	>Increase count</button
>
