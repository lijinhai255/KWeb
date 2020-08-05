import Vue from 'vue'
import Notice from '@/components/Notice.vue'
// Component - 组件配置对象
// props - 传递给它的属性
function create(Component, props) {
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({ propsData: props })
  comp.$mount();
  document.body.appendChild(comp.$el)
  comp.remove = () => {
    // 移除 dom
    document.body.removeChild(comp.$el)
    // 销毁组件
    comp.$destroy();
  }
  // 1.构建Component的实例
  // const vm = new Vue({
  //   render(h) {/Users/a123/Desktop/FE/121/易车无忧/back2/src/components/form-item-des/form-item-des.jsx
  //     // h是createElement
  //     // 它可以返回一个vnode
  //     return h(Component, { props })
  //   }
  // }).$mount() // 不设置挂载目标，依然可以转换vnode为真实节点$el
  // 2.挂载到body上
  // document.body.appendChild(vm.$el)


  // 3.获取组件实例
  // const comp = vm.$children[0]

  // comp.remove = () => {
  //   document.body.removeChild(vm.$el)
  //   vm.$destroy()
  // }

  return comp
}
export default {
  install(Vue) {
    Vue.prototype.$notice = function (options) {
      const comp = create(Notice, options)
      comp.show()
      return comp
    }
  }
}

