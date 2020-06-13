import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'
export default {
    //mutations的唯一目的是修改state中的状态
    //mutations中的每个方法尽可能事件单一
    ADD_COUNTER (state,payload) {
        payload.count++
    },
    ADD_TO_CART (state,payload) {
        payload.isChecked = true
        state.cartList.push(payload)
    }
}