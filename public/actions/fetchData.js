
import request from 'superagent'

export const receiveData = (page) => {

    return dispatch => {
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
}
