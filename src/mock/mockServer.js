/*
使用mockjs提供mock数据接口
*/
import Mock from 'mockjs'
import data from './data.json'

// 返回商铺列表
Mock.mock('/shops', {code: 0, data: data.shops})
// 返回位置详情
Mock.mock('/position', {code: 0, data: data.address})
// 返回食品分类接口
Mock.mock('/foodtypes', {code: 0, data: data.foodTypes})
// 返回goods列表
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回ratings的接口
Mock.mock('/"ratings"', {code: 0, data: data.ratings})
// 返回info
Mock.mock('/info', {code: 0, data: data.info})
// 用户名
Mock.mock('/login_pwd', {code: 0, data: data.userName})
// 发送短信验证码
Mock.mock('/sendcode', {code: 0, data: data.sendCode})
// 发送短信验证码
Mock.mock('/login_sms', {code: 0, data: data.loginSms})
// 获取用户信息
Mock.mock('/userinfo', {code: 0, data: data.userInfo})
// 用户登出
Mock.mock('/logout', {code: 0, data: data.logout})
// 根据光尖子搜索商铺列表
Mock.mock('/search_shops', {code: 0, data: data.searchShops})

// 不需要想歪暴露任何数据,只需要保证可以执行一次
