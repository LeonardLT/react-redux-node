

export const listData = (state = { page: 1, isFetching: false, list: [] }, action) => {
	switch(action.type) {
		case 'REQUEST_DATA':
			newState = { page: 1, isFetching: false, list: [], isFetching: true, page: action.page }
		  	return state;	
				    
		case 'RECEIVE_DATA':
			newState1 = { [...state], list: [...state.list, ...action.data] }
		  	return newState1;	    
		default:
		  	return state
	}
}
