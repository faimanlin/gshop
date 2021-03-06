/*
 通过mutations间接更新state的多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  REST_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT
} from './mutations-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
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
  },
  // 异步获取商品
  async getShopGoods ({commit}, callback) {
    // 发送异步ajax请求
    const result = await reqShopGoods()
    // 提交一个mutation
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了,通知一下组件
      callback && callback()
    }
  },
  // 异步获评价
  async getShopRatings ({commit}) {
    // 发送异步ajax请求
    const result = await reqShopRatings()
    // 提交一个mutation
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // 异步获评价
  async getShopInfo ({commit}) {
    // 发送异步ajax请求
    const result = await reqShopInfo()
    // 提交一个mutation
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 同步更新food中的count值
  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}
