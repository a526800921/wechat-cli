## wechat-cli 最低限度支持类vue语法

> 页面、组件封装
   * global._Page(params)
   * global._Component(params)

> 模拟vuex
   * 可以按照vuex的基本写法来使用
   * 在js中使用 mapState(state) { return { test: state.test } } 来渲染页面，test 将赋值到 data 数据中，故在js中使用 test 需 this.data.test
   * 在js中使用 mapGetters(getters) { return { test: getters.test } } 渲染页面，同 state
   * mapState mapGetters 具体用法参考 pages/home/home.js
   * 可使用 this.$store.dispatch('module/name', data)
   * 可使用 this.$store.commit('module/name', data)
   * 在 render/addStore.js 中添加各模块 store
   * 在 render/storage.js 中可以同步 mutation 的本地缓存

> 页面独立的生命周期
   * onPageLoad 接收 onLoad 中 options 页面路径参数，在 storage 初始化 state 数据完成之后执行，此时可以拿到 token ，方便请求
   * onPageShow 同上，但是没有页面路径参数 options

> 模拟 computed watch
   * 在js中用法与vue相同
   * state 的改变会同步改变
   * 需使用 this.setData(data) 方法才会触发改变
   * watch 只能做浅层的监听 xxx() {}，深层无法监听 \['xxx.yyy'\]() {}
   * computed 值的改变是在 this.setData(data, callback) 的 callback 中进行的改变，故使用同步的时候注意 computed 的值的使用。建议： await new Promise(res => this.setData(data, res))

> 微信api
   * 所有方法都使用 this.$native.call('name', data) 进行了 Promise 封装，例如：
      * const res = await this.$native.call('showModal', { title: 'xxx', content: 'xxx' }) 
      * 个别方法没有回调，应直接写完整方法
   * 路由跳转模拟 vueRouter
      * this.$router.push('url')
      * this.$router.replace('url')
      * this.$router.back(1)
      * this.$router.switchTab('url') // 跳转到tabbar页面所使用
      * this.$router.reLaunch('url') // 销毁其他页面使用








