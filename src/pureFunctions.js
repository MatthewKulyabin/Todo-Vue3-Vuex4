export const toLocalStorage = ({state, get}) => {
	if (get) {
		return JSON.parse(localStorage.getItem('notebooks'));
	}
	localStorage.setItem('notebooks', JSON.stringify(state.notebooks));
};

export const compare = (a, b, item) => {
	if (a[item] < b[item]) {
		return -1;
	}
	if (a[item] > b[item]) {
		return 1;
	}
	return 0;
};
