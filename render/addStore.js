import App from '../pages/store'

export default add => {
  // 执行添加
  add('App', App)
  
  // 添加完成
  add.end()
}