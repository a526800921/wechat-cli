// components/html-parse/html-parse.js
import _wxParse from '../../utils/wxParse/wxParse'

global._Component({
  /**
   * 组件的属性列表
   */
  properties: {
    html: {
      type: String,
      value: '',
      observer(newValue) {
        newValue && _wxParse.wxParse('article', 'html', newValue, this, 0)
      }
    }
  },

  externalClasses: ['box-class'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
