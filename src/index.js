import GoTop from './components/goTop.vue'
GoTop.install = function (Vue) {
  Vue.component(GoTop.name, GoTop)
}

const components = [
  GoTop
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  GoTop
}
export default GoTop
