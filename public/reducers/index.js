/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:18
 */
import { combineReducers } from 'redux'
import { menus, login } from './menus'
import { toggle } from './toggle'
import { listData } from './fetchData'

const reducers = combineReducers({
    menus,
    login,
    toggle,
    listData
})

export default reducers;