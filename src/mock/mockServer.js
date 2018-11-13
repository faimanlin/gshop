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

// 不需要想歪暴露任何数据,只需要保证可以执行一次
