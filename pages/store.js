import native from '../render/native'

const state = {
  systemInfo: {}, // 设备信息
  pageSize: 10, // 全局分页大小

  test: 0,
}

const getters = {
  test(state) {

    return state.test / 2
  }
}

const mutations = {
  ['SET_SYSTEM_INFO'](state, info) {

    state.systemInfo = info
  },
  ['SET_TEST'](state) {

    state.test++
  }
}

const actions = {
  async getSystemInfo({ commit, state }) {
    // 获取系统信息
    if (state.systemInfo.system) return state.systemInfo

    const res = await native.call('getSystemInfo')

    commit('App/SET_SYSTEM_INFO', res)

    return res
  },
  setTest({ commit }) {

    commit('App/SET_TEST')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}