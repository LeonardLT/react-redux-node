/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午6:41
 */
export const login = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            return action.data
        default :
            return state
    }
}