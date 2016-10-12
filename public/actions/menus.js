/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:23
 */

import request from 'superagent'

export const loadMenus = (dispatch) => {
    request
        .get('/api/json')
        .end((err,res) => {
            dispatch({
                type: 'indexLoaded',
                data: res.body
            })
        })
}

// export const loadNumber = (dispatch) => {
//     request
//         .get('/api/json')
//         .end((err,res) => {
//             dispatch({
//                 type: 'numberLoaded',
//                 data: res.body
//             })
//         })
// }