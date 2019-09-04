import store from '../render/store'

const proxy = {
  // '/hsk': 'https://hsk.hskeye.com/v1/api',
}

const perfectUrl = function(url) {
  const keys = Object.keys(proxy)
  const key = keys.find(key => new RegExp(`^${key}`).test(url))

  return url.replace(key, proxy[key])
}

const fetch = function(method = 'GET', url = '', data = {}, options = {}) {

  return new Promise((resolve, reject) => {

    wx.request({
      url: perfectUrl(url),
      data,
      header: {
        // 'access-token': store.state.App.token,
        'content-type': 'application/json',
        ...options.header
      },
      method,
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail: reject,
      // complete: function(res) {},
    })
  })
}

const upload = function (url = '', data = {}, options = {}) {
  
  return new Promise((resolve, reject) => {

    wx.uploadFile({
      url: perfectUrl(url),
      filePath: data.filePath || '',
      name: 'file',
      formData: data.formData,
      header: {
        // 'access-token': store.state.App.token,
        'content-type': 'application/json',
        ...options.header
      },
      success: res => {
        res.data = JSON.parse(res.data)

        resolve(res)
      },
      fail: reject,
    })
  })
}

const response = function(fn, count = 3) {

  return fn().then(res => {
    if (res.data.error != 0) {
      // 数据出错
      console.error(res.data)
    }

    return res.data
  }).catch(err => {
    // 接口报错
    console.error(err)

    return count <= 1 ? err : response(fn, count - 1)
  })
}

export default {
  get(url, data, options) {

    return response(() => fetch('GET', url, data, options))
  },
  post(url, data, options) {

    return response(() => fetch('POST', url, data, options))
  },
  upload(url, data, options) {

    return response(() => upload(url, data, options))
  }
}