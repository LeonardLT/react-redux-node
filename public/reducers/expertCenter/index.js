/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:18
 */
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { login } from '../login'

const reducers = combineReducers({
    routing,
    login
})

export default reducers;