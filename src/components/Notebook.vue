<template>
	<div class="notebook">
		<InputHeader :index="index" />
	</div>
</template>

<script>
import InputHeader from './InputHeader';

export default {
	props: ['index'],
	name: 'Notebook',
	components: {
		InputHeader,
	},
}
</script>

<style>
	.notebook {
		border: 1px solid #ccc;
		margin-bottom: 15px;
	}
</style>

