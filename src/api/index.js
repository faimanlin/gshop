/*
 包含N个借口请求函数的模块
*/

// const BASE_URL ='/api' 跨域设计的配置
import ajax from './ajax'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = () => ajax('/position')

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax('/foodtypes')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
// export const reqShops = (longitude, latitude) => ajax('/mock', {longitude, latitude})
export const reqShops = (longitude, latitude) => ajax('/shops')

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShop = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})

// [6、用户名密码登陆](#6用户名密码登陆)<br/>// 模拟POST 请求
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/login_pwd', {name, pwd, captcha})

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax('/sendcode', {phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code})

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax('/userinfo')

// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax('/logout')
/*
获取商家信息
*/
export const reqShopInfo = () => ajax('/info')

/*
获取商品
*/
export const reqShopGoods = () => ajax('/goods')

/*
获取商品
*/
export const reqShopRatings = () => ajax('/ratings')
