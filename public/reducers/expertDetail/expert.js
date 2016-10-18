/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午6:45
 */
export const listData = (state = { page: 1, list: [] }, action) => {
    switch(action.type) {
        case 'RECEIVE_DATA':
            console.log(action);
            return {
                page: action.page,
                list: [...state.list, ...action.data.list]
            }
            break;

        default:
            return state
    }
}

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

export const expert = (state = {}, action) => {
    switch (action.type) {
        case 'expertDetailLoaded':
            return action.data
        default :
            return state
    }
}