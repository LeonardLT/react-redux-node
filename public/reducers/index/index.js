/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:18
 */
import { combineReducers } from 'redux'
import { login } from '../login'
import { menus } from './menus'

const reducers = combineReducers({
    menus,
    login
})

export default reducers;