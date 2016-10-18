
import request from 'superagent'

requestData(page, dispatch) => {
	request
        .get('/api/fetchData')
        .end((err,res) => {
            dispatch({
                type: 'REQUEST_DATA',
                page: page,
                data: res.body
            })
        })
}

receiveData(page, dispatch) => {
	request
        .get('/api/fetchData')
        .end((err,res) => {
            dispatch({
                type: 'RECEIVE_DATA',
                page: page,
                data: res.body
            })
        })
}

// function fetchData(page) {
//   return dispatch => {
//     dispatch(requestData(page))

//     return fetch(`http://api.data.com?page=${page}`)
//       .then(response => response.json())
//       .then(json => dispatch(receiveData(json)))
//   }
// }

// export function fetchDataIfNeeded(page) {
//   return (dispatch, getState) => {
//     if (!getState().isFetching) {
//       return dispatch(fetchData(page))
//     }
//   }
// }

export function fetchData(page){
	if(!getState().isFetching){
		return dispatch(requestData(page))
	} else{
		return dispatch(receiveData(page))
	}
}