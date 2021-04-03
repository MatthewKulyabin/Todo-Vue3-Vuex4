<template>
	<div class="todo"
		@click.right.prevent="todoRemoveHandler"
	>
		<div
			class="checkbox"
			v-text="checkboxed"
			@click="checkboxedToggleHandler"
		></div>
		<div>
			<input
				:class="['todo_input', checkboxed ? 'line_through' : '']"
				type="text"
				placeholder="Title..."
				v-model="titleText"
				@keydown.enter="todoChangeTitleHandler"
			/>
			{{date()}}
		</div>
		<input
			class="priority_input"
			v-model="priority"
			@keydown.enter="todoChangePriorityHandler"
		/>
	</div>
</template>

<script>
export default {
	props: ['index', 'todoIndex'],
	name: 'Todo',
	data() {
		return {
			titleText: this.$store.getters.todo(this.index, this.todoIndex).title,
			checkboxed: this.$store.getters.checkboxed(this.index, this.todoIndex)
				? ''
				: 'X',
			priority: this.$store.getters.priority(this.index, this.todoIndex),
		};
	},
	methods: {
		date() {
			return this.$store.getters.todo(this.index, this.todoIndex).date;
		},
		todoRemoveHandler() {
			this.$store.commit('todoRemove', {index: this.index, todoIndex: this.todoIndex});
		},
		todoChangeTitleHandler() {
			if (this.titleText === '') {
				this.todoRemoveHandler();
				return;
			}
			this.$store.commit('todoChangeTitle', {
				index: this.index,
				todoIndex: this.todoIndex,
				title: this.titleText,
			});
		},
		checkboxedToggleHandler() {
			this.$store.commit('checkboxedToggle', {index: this.index, todoIndex: this.todoIndex});
			this.checkboxed = this.checkboxed ? '' : 'X';
		},
		todoChangePriorityHandler() {
			this.$store.commit('todoChangePriority', {
				index: this.index,
				todoIndex: this.todoIndex,
				priority: this.priority,
			});
		}
	},
}
</script>

<style>
	.todo {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.todo_input {
		display: flex;
		padding-left: 10px;
		width: 570px;
	}
	.checkbox {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		border: 1px solid #000;
		margin-right: 20px;
		font-size: 30px;
		cursor: pointer;
	}
	.line_through {
		text-decoration: line-through;
	}
	.priority_input {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 50px;
		height: 50px;
		margin-right: 0px;
	}
</style>
