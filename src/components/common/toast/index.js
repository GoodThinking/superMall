import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {

    //创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //以new的方式，通过组件构造器，创建一个组件对象
    const toast = new toastConstructor()

    //将组件对象手动挂载到某个元素上
    toast.$mount(document.createElement('div'))

    //toast.$el就是div
    document.body.appendChild(toast.$el)

    //最后将$toast挂载到vue原型上
    Vue.prototype.$toast = toast

}

export default obj