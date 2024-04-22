<script lang="ts">
	import heroBg from '../lib/images/presentation.jpg?enhanced';
	// console.log(heroBg);
</script>

<!-- <img src={heroBg} alt="" /> -->
<div class="relative">
	<enhanced:img
		src={heroBg}
		class=" mx-auto block max-h-full max-w-full object-cover"
	>
	</enhanced:img>
	<div class="absolute inset-0 bg-black opacity-50"></div>
</div>

<!-- <enhanced:img src={heroBg} class="block max-h-full max-w-full object-cover"> -->
<!-- </enhanced:img> -->
