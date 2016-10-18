/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/17
 * Time: 下午8:21
 */
export const toggle = (state = [], action) => {
    switch (action.type) {
        case 'expand':
            let newState = [].concat(state);
            newState[action.id] = !newState[action.id];
            return newState
        default :
            return state
    }
}