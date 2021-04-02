<template>
	<div @click="log()">
		<input
			type="text"
			v-model="notebookTitle"
			@keydown.enter="saveNotebookTitleHandler(notebookTitle)"
		/>
		<!-- Icons -->
		<!-- todo component -->
	</div>
</template>

<script>
export default {
	props: ['index'],
	name: 'InputHeader',
	data() {
		return {
			notebookTitle: this.$store.getters.notebook(this.index).title,
		};
	},
	methods: {
		saveNotebookTitleHandler(title) {
			this.$store.commit('saveNotebookTitle', {index: this.index, title});
		},
	},
	computed: {
		notebook() {
			return this.$store.getters.notebook(this.index);
		},
	},
}
</script>

<style>
	
</style>
