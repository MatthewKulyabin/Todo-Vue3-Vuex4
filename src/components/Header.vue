<template>
	<div class="header">
		<div>
			<input
				type="text"
				placeholder="Search"
			/>
		</div>
		<div
			class="add"
			@click="addNotebook"
		>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'Header',
	methods: {
		addNotebook() {
			this.$store.commit('addNotebook');
		},
	},
	computed: {
		...mapGetters([
			'notebooks',
		]),
	},
};
</script>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		margin-left: 30%;
		margin-right: 30%;
		border: 1px solid #ccc;
		padding: 20px;

		margin-bottom: 30px;
	}
	.add {
		background-image: url(https://img.icons8.com/ios/100/000000/add--v1.png);
		background-size: 50px;
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
	input {
		height: 50px;
		font-size: 20px;
	}
</style>
