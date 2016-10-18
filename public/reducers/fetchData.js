

export const listData = (state = { page: 1, list: [] }, action) => {
	switch(action.type) {
		case 'RECEIVE_DATA':
			console.log(action);
		  	return {
		        page: action.page,
				list: [...state.list, ...action.data.list]
			}
			break;

		default:
		  	return state
	}
}
