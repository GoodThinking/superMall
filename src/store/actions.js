import {ADD_COUNTER,ADD_TO_CART} from './mutations-type'
export default {
    addCart (context,payload) {
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item => item.id == payload.id)
        if (oldProduct) {
          context.commit('ADD_COUNTER',oldProduct)
          resolve('商品的数量加1')
        } else {
          payload.count = 1
          context.commit('ADD_TO_CART',payload)
          resolve('添加了新的商品')
        }
      }) 
    }
}