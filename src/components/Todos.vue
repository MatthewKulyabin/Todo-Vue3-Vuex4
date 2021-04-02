<template>
	<div class="todos">
		<Todo
			v-for="todo in todos"
			:index="index"
			:todoIndex="todo.id"
			v-bind:key="todo.id"
		/>
		<div class="addTodo">
			<div class="checkbox_add"></div>
			<div>
				<input
					class="todo_add_input"
					type="text"
					placeholder="Title..."
					v-model="titleText"
					@keydown.enter="todoAddHandler"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Todo from './Todo';

export default {
	props: ['index'],
	name: 'Todos',
	components: {
		Todo,
	},
	data() {
		return {
			titleText: '',
		};
	},
	methods: {
		todoAddHandler() {
			if (this.titleText) {
				this.$store.commit('todoAdd', {index: this.index, title: this.titleText});
				this.titleText = '';
			}
		},
	},
	computed: {
		todos() {
			return this.$store.getters.todos(this.index);
		},
	},
}
</script>

<style>
	.todos {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;
	}
	.addTodo {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.checkbox_add {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		border: 1px solid #000;
		margin-right: 20px;
		font-size: 30px;
		background-color: #ccc;
	}
	.todo_add_input {
		display: flex;
		padding-left: 10px;
		width: 620px;
		background-color: #ccc;
	}
</style>
