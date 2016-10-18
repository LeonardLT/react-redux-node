/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:11
 */
export const menus = (state = {}, action) => {
    switch (action.type) {
        case 'indexLoaded':
            return action.data
        default :
            return state
    }
}

export const login = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            return action.data
        default :
            return state
    }
}
