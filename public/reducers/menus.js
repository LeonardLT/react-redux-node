/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:11
 */
export const menus = (state = [], action) => {
    switch (action.type) {
        case 'menusLoaded':
            return action.data.menu
        default :
            return state
    }
}

export const number = (state = [], action) => {
    switch (action.type) {
        case 'numberLoaded':
            return action.data.number
        default :
            return state
    }
}