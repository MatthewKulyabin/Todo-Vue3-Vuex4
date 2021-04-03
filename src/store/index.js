import {createStore} from 'vuex';

import {toLocalStorage, compare} from '../pureFunctions';

export default createStore({
	state() {
		return {
			notebooks: toLocalStorage({get: true}) || [],
			searchedNotebook: null,
			colors: ['#FF0000', '#000CFF', '#000000', "#CCCCCC"],
			sortBy: ['title', 'date', 'priority'],
			sortedTodos: [],
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
		searchedNotebookIndex(state) {
			if (state.searchedNotebook) {
				return state.searchedNotebook.id
			}
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
		colors(state) {
			return state.colors;
		},
		sortBy(state) {
			return state.sortBy;
		},
	},
	mutations: {
		addNotebook(state) {
			state.notebooks.push({
				id: Date.now(),
				title: '',
				color: '#000',
			});
			toLocalStorage({state});
		},
		removeNotebook(state, {index}) {
			state.notebooks = state.notebooks.filter(n => n.id !== index);
			toLocalStorage({state});
		},
		saveNotebookTitle(state, {index, title}) {
			state.notebooks.find(n => n.id === index).title = title;
			toLocalStorage({state});
		},
		searchNotebook(state, {text}) {
			state.searchedNotebook = state.notebooks.find(n => {
				return n.title.toLowerCase() === text.toLowerCase()
			});
		},
		notebookChangeColor(state, {index, colorNumber}) {
			state.notebooks.find(n => n.id === index).color = state.colors[colorNumber];
			toLocalStorage({state});
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
				date: JSON.stringify(new Date()),
			});
			toLocalStorage({state});
		},
		todoRemove(state, {index, todoIndex}) {
			const newTodos = state.notebooks
				.find(n => n.id === index).todos
				.filter(t => t.id !== todoIndex);
			state.notebooks.find(n => n.id === index).todos = newTodos;
			toLocalStorage({state});
		},
		todoChangeTitle(state, {index, todoIndex, title}) {
			state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).title = title;
			toLocalStorage({state});
		},
		todoChangePriority(state, {index, todoIndex, priority}) {
			state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).priority = priority;
			toLocalStorage({state});
		},
		sortTodos(state, {index, item}) {
			state.notebooks
					.find(n => n.id === index).todos
					.sort((a, b) => compare(a, b, item))
		},
		checkboxedToggle(state, {index, todoIndex}) {
			const currentCheckboxed = state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).checkboxed;
			state.notebooks
				.find(n => n.id === index).todos
				.find(t => t.id === todoIndex).checkboxed = !currentCheckboxed;
			toLocalStorage({state});
		},
	},
	actions: {
	},
});
