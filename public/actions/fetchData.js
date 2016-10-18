
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

export const loadExpertData = (id) => {
    return dispatch => {
        request
            .get(`/api/expertDetail/${id}`)
            .end((err,res) => {
                if(err) window.location.href = "https://www.baidu.com";

                dispatch({
                    type: 'expertDetailLoaded',
                    data: res.body
                })
            })
    }
}