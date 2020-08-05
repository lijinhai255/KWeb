export default {
    render(h) {
        //1  标记 当前router 深度
        this.$vnode.data.routerView = true;
        console.log(this.$vnode.data, "this.$vnode.data")
        let depth = 0;
        let parent = this.$parent;
        while (parent) {
            const vnodeData = parent.$vnode && parent.$vnode.data
            console.log(parent.$vnode, "vnodeDatavnodeData")
            if (vnodeData) {
                if (vnodeData.routerView) {
                    depth++
                }
            }
            parent = parent.$parent
        }

        // 找到当前url对应的组件
        // const {routeMap, current} = this.$router
        // const component = routeMap[current] ? routeMap[current].component : null

        let component = null
        const route = this.$router.matched[depth]
        // console.log(route, depth, 1212121)
        if (route) {
            component = route.component
        }

        // 渲染传入组件
        return h(component)
    }
}