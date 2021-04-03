<template>
	<div class="notebooks">
		<Notebook
			v-if="searchedNotebookIndex"
			:index="searchedNotebookIndex"
			v-bind:key="searchedNotebookIndex"
		/>
		<Notebook
			v-if="!searchedNotebookIndex"
			v-for="(notebook, i) in notebooks"
			:index="notebook.id"
			v-bind:key="notebook.id"
		/>
		<p v-if="!notebooks.length">There is no notebooks yet</p>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

import Notebook from './Notebook';

export default {
	name: 'Notebooks',
	components: {
		Notebook,
	},
	computed: {
		...mapGetters([
			'notebooks'
		]),
		searchedNotebookIndex() {
      return this.$store.getters.searchedNotebookIndex;
    },
	},
}
</script>

<style>
	.notebooks {
		justify-content: 'center';
		align-items: center;
		margin-left: 30%;
		margin-right: 30%;
	}
</style>
