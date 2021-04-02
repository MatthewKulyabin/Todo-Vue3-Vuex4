<template>
	<div class="inputHeader">
		<div>
			<input
				class="no_border"
				type="text"
				placeholder="Title..."
				v-model="notebookTitle"
				@keydown.enter="saveNotebookTitleHandler(notebookTitle)"
			/>
		</div>
		<div>
			<img
				class="icon"
				src="https://img.icons8.com/ios/100/000000/fill-color.png"
				@click="notebookChangeColorHandler"
			/>
			<img
				class="icon"
				src="https://img.icons8.com/ios/100/000000/delete-trash.png"
				@click="removeNotebookHandler"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: ['index'],
	name: 'InputHeader',
	data() {
		return {
			notebookTitle: this.$store.getters.notebook(this.index).title,
			changeColorClick: 0,
		};
	},
	methods: {
		saveNotebookTitleHandler(title) {
			this.$store.commit('saveNotebookTitle', {index: this.index, title});
		},
		removeNotebookHandler() {
			this.$store.commit('removeNotebook', {index: this.index});
		},
		notebookChangeColorHandler() {
			if (this.changeColorClick < this.$store.getters.colors.length) {
				this.changeColorClick = 0;
			}
			this.$store.commit('notebookChangeColor', {index: this.index, colorNumber: this.changeColorClick});
			this.changeColorClick++;
		},
	},
}
</script>

<style>
	.inputHeader {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border: 1px solid #ccc;
		margin: 10px;
	}
	.icon {
		width: 50px;
		height: 50px;
		margin-left: 25px;
		margin-right: 25px;
		cursor: pointer;
	}
	.no_border {
		border: 0px solid #fff;
	}
</style>
