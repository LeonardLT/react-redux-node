/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:18
 */
import { combineReducers } from 'redux'
import { menus, login, reg, findPword } from './menus'

const reducers = combineReducers({
    menus,
    login,
    reg,
    findPword
})

export default reducers;