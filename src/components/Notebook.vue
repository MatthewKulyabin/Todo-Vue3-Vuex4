<template>
	<div 
		class="notebook"
		:style="changeNotebookColor"
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
	components: {
		InputHeader,
		Todos,
	},
	computed: {
		changeNotebookColor() {
			const notebook = this.$store.getters.notebook(this.index);
			return {
				border: `1px solid ${notebook.color}`,
			};
		},
	},
}
</script>

<style>
	.notebook {
		border: 1px solid #ccc;
		margin-bottom: 15px;
	}
</style>

