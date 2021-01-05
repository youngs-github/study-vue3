<template>
	<div :class="$style['not-found']">
		404 not fount
	</div>
</template>

<script>
	export default {
		name: 'NotFound'
	};
</script>

<style module>
	.not-found {
		color: darksalmon;
		font-size: 16px;
	}
</style>
