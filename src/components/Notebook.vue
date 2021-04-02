<template>
	<div 
		class="notebook"
		:style="changeColor"
	>
		<InputHeader :index="index" />
		<Todos :index="index" />
	</div>
</template>

<script>
import InputHeader from './InputHeader';
import Todos from './Todos';

export default {
	props: ['index'],
	name: 'Notebook',
	methods: {
		changeColor() {
			const color = this.$store.getters.notebook(index).color;
			return {
				border: `3px solid ${color}`
			};
		}
	},
	components: {
		InputHeader,
		Todos,
	},
}
</script>

<style>
	.notebook {
		border: 1px solid #ccc;
		margin-bottom: 15px;
	}
</style>

