<script lang="ts">
	type Todo = {
		text: string;
		done: boolean;
	};

	let todos: Array<Todo> = $state([
		{ text: 'Clean the house', done: false },
		{ text: 'Feed the cat', done: true },
		{ text: 'Trim my mustache', done: false },
	]);

	function addTodo(e: KeyboardEvent) {
		if (e.key !== 'Enter') return;

		const todoEl = e.target as HTMLInputElement;
		const text = todoEl.value;
		const done = false;

		todos.push({ text, done });

		todoEl.value = '';
	}

	function editTodo(
		e: Event & { currentTarget: EventTarget & HTMLInputElement },
	) {
		const inputEl = e.target as HTMLInputElement;
		if (!inputEl.dataset.index) return;
		const idx = +inputEl.dataset.index;
		todos[idx].text = inputEl.value;
	}

	function toggleStatus(e: KeyboardEvent) {
		if (e.key !== 'Enter') return;

		console.log('Here');

		const inputEl = e.target as HTMLInputElement;
		if (!inputEl.dataset.index) return;
		const idx = +inputEl.dataset.index;
		todos[idx].done = !inputEl.checked;
	}

	// Console Log Razlike.
	// $effect(() => console.log(todos, ' todo'));
	$inspect(todos);

	const filters: ReadonlyArray<Filter> = ['all', 'active', 'done'];
	// How do we filter them ?
	// Derived State...

	type Filter = 'all' | 'active' | 'done';
	let currentFilter: Filter = $state('all');
	let todosToDisplay = $derived(filterTodos(currentFilter));

	function filterTodos(state: Filter) {
		if (state === 'active') {
			return todos.filter((todo) => !todo.done);
		}
		if (state === 'done') {
			return todos.filter((todo) => todo.done);
		}

		return todos;
	}

	let remainingTodos = $derived(remaining());
	function remaining() {
		return todos.reduce((acc, currVal) => {
			if (!currVal.done) {
				acc++;
			}
			return acc;
		}, 0);
	}

	$effect(() => {
		todos.length % 2 === 0 && console.log('rawr');
	});
</script>

<nav class="mb-12 max-w-fit px-4 py-2">
	<a href="/todo/" class="px-2 py-1">Example 1</a>
	<a href="/2" class="px-2 py-1">Example 2</a>
	<a href="/3" class="px-2 py-1">Example 3</a>
</nav>

<div class="mx-auto mb-12 flex items-center justify-center">
	{#each filters as filter}
		<button
			class="text-md btn btn-primary btn-sm mx-2 uppercase"
			onclick={() => {
				currentFilter = filter;
			}}>{filter}</button
		>
	{/each}
</div>

<div class="grid place-items-center">
	<input
		type="text"
		placeholder="Add todo..."
		class="input input-bordered mx-auto mb-12 inline-block w-full max-w-sm"
		onkeydown={addTodo}
	/>
</div>

<div class="todos mb-6">
	{#each todosToDisplay as todo, idx (idx)}
		<div
			class="todo input input-bordered relative mx-auto mb-2 flex min-h-16 max-w-sm items-center justify-start rounded"
			class:line-through={todo.done}
		>
			<input
				type="text"
				data-index={idx}
				value={todo.text}
				class="h-full w-full bg-inherit px-2 text-xl outline-none"
				oninput={editTodo}
			/>
			<input
				type="checkbox"
				data-index={idx}
				bind:checked={todo.done}
				class="checkbox-primary checkbox absolute right-3 top-[50%] size-6 -translate-y-1/2 focus:ring-4"
				onkeydown={toggleStatus}
			/>
		</div>
	{/each}
</div>

<strong class="inline-block w-full text-center text-xl tracking-wider"
	>Todos remaining: <span class="text-2xl font-bold text-primary"
		>{remainingTodos}</span
	></strong
>
<!-- 2way -->
