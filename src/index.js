import GoTop from './components/goTop.vue'

/* 
Vue.component( id, [definition] )
注册或获取全局组件。注册还会自动使用给定的id设置组件的名称

1. 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { ... })

2.获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')
*/

GoTop.install =  (Vue) =>{
  Vue.component(GoTop.name, GoTop)
}

const components = [
  GoTop
]

const install = (Vue, opts = {})=> {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
//对外暴露对象，支持import {xx} from "xx" 的方式引用
export {
  GoTop
}
//对外暴露默认对象，对外暴露默认对象，支持import xx from "xx" 的方式引用(与上面方法可以共存)
export default GoTop
