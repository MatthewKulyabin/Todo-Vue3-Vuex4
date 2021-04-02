import {createStore} from 'vuex';

export default createStore({
	data() {
		return {
			colors: ['#FF0000', '#000CFF', '#000000'],
		};
	},
	state() {
		return {
			title: 'title mega nano',
			notebooks: [],
		};
	},
	getters: {
		title(state) {
			return state.title;
		},
		notebooks(state) {
			return state.notebooks;
		},
		notebook: state => index =>  {
			return state.notebooks.find(n => n.id === index);
		},
		todos: state => index => {
			return state.notebooks.find(n => n.id === index).todos;
		},
		todo: state => (index, todoIndex) => {
			return state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex);
		},
		checkboxed: state => (index, todoIndex) => {
			return state.notebooks
							.find(n => n.id === index).todos
							.find(t => t.id === todoIndex).checkboxed;
		},
		priority: state => (index, todoIndex) => {
			return state.notebooks
							.find(n => n.id === index).todos
							.find(t => t.id === todoIndex).priority;
		},
		colors() {
			return this.colors;
		},
	},
	mutations: {
		addNotebook(state) {
			state.notebooks.push({
				id: Date.now(),
				title: '',
			});
		},
		saveNotebookTitle(state, {index, title}) {
			state.notebooks.find(n => n.id === index).title = title;
		},
		todoAdd(state, {index, title}) {
			const notebook = state.notebooks.find(n => n.id === index);
			if (!notebook.todos) {
				notebook.todos = [];	
			}
			notebook.todos.push({
				id: Date.now(),
				title,
				checkboxed: true,
				priority: 1,
				color: '#000',
			});
		},
		todoRemove(state, {index, todoIndex}) {
			const newTodos = state.notebooks
				.find(n => n.id === index).todos
				.filter(t => t.id !== todoIndex);
			state.notebooks.find(n => n.id === index).todos = newTodos;
			console.log(state.notebooks.find(n => n.id === index).todos);
		},
		todoChangeTitle(state, {index, todoIndex, title}) {
			state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).title = title;
			console.log(state.notebooks.find(n => n.id === index).todos.find(t => t.id === todoIndex));
		},
		removeNotebook(state, {index}) {
			state.notebooks = state.notebooks.filter(n => n.id !== index);
		},
		checkboxedToggle(state, {index, todoIndex}) {
			const currentCheckboxed = state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).checkboxed;
			console.log(currentCheckboxed);
			state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).checkboxed = !currentCheckboxed;
		},
		todoChangePriority(state, {index, todoIndex, priority}) {
			state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).priority = priority;
			console.log(state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex));
		},
		notebookChangeColor(state, {index, colorNumber}) {
			console.log(this);
			state.notebooks.find(n => n.id === index).color = this.colors[colorNumber];
		},
	},
	actions: {

	},
});
