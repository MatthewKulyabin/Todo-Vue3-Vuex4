import {createStore} from 'vuex';

export default createStore({
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
		notebook: (state) => index =>  {
			return state.notebooks.find(n => n.id === index);
		}
	},
	mutations: {
		addNotebook(state) {
			state.notebooks.push({
				id: Date.now(),
				title: 'asd',
			});
		},
		saveNotebookTitle(state, {index, title}) {
			console.log(1);
			state.notebooks.find(n => n.id === index).title = title;
		},
	},
	actions: {

	},
});
