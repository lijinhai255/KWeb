// 实现一个插件
// 返回一个函数
// 或者返回一个对象，他有一个install方法
import routerView from "./krouter-view";
let _Vue

class VueRouter {
  // 选项：routes - 路由表
  constructor(options) {
    this.$options = options

    // 缓存path和route映射关系
    // this.routeMap = {}
    // this.$options.routes.forEach(
    //   route => {
    //     this.routeMap[route.path] = route
    //   })
    // console.log(route);

    // 需要定义一个响应式的current属性
    // const initial = window.location.hash.slice(1) || '/'
    // _Vue.util.defineReactive(this, 'current', initial)
    this.current = window.location.hash.slice(1) || "/"
    _Vue.util.defineReactive(this, 'matched', [])
    // match 方法  递归遍历
    this.match()
    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
  }

  onHashChange() {

    // 只要#后面部分
    this.current = window.location.hash.slice(1)
    console.log(this.current);
    this.matched = []
    this.match()


  }
  match(routes) {
    routes = routes || this.$options.routes
    //递归
    for (const route of routes) {
      if (route.path === "/" && this.current === "/") {
        this.matched.push(route)
        return
      }
      if (this.current !== "/" && this.current.indexOf(route.path) != -1) {
        this.matched.push(route)
        if (route.children) {
          this.match(route.children)
        }


      }

    }

  }
}


VueRouter.install = function (Vue) {
  // 引用Vue构造函数，在上面VueRouter中使用
  _Vue = Vue

  // 1.挂载$router
  Vue.mixin({
    beforeCreate() {
      // 此处this指的是组件实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 2.定义两个全局组件router-link,router-view
  Vue.component('router-link', {
    // template: '<a>'
    props: {
      to: {
        type: String,
        require: true
      },
    },
    render(h) {
      // <router-link to="/about">
      // <a href="#/about">xxx</a>
      // return <a href={'#'+this.to}>{this.$slots.default}</a>
      return h('a', {
        attrs: {
          href: '#' + this.to
        }
      }, this.$slots.default)
    }
  })
  Vue.component('router-view', routerView)
}

export default VueRouter