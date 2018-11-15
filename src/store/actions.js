/*
 通过mutations间接更新state的多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  REST_USER_INFO
} from './mutations-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout
} from '../api'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    console.log(geohash)
    const result = await reqAddress()
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取食品分类列表
  async getCategorys ({commit, state}) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发送异步ajax请求
    const {latitude, longitude} = state
    console.log(latitude, longitude)
    const result = await reqShops()
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    console.log(userInfo)
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取商家列表
  async getUserInfo ({commit, state}) {
    // 发送异步ajax请求
    const result = await reqUserInfo()
    // 提交一个mutation
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  // 异步退出
  async logout ({commit, state}) {
    // 发送异步ajax请求
    const result = await reqLogout()
    // 提交一个mutation
    if (result.code === 0) {
      commit(REST_USER_INFO)
    }
  }
}
