/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:18
 */
import { combineReducers } from 'redux'
import { menus, login, reg } from './menus'
import { toggle } from './toggle'

const reducers = combineReducers({
    menus,
    login,
    toggle,
    reg,
})

export default reducers;