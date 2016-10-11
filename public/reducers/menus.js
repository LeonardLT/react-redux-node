/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午8:11
 */
const menus = (state = [], action) => {
    switch (action.type) {
        case 'menusLoaded':
            console.log(action);
            return action.data
        default :
            return state
    }
}
export default menus;
