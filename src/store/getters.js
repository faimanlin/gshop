/*
 包含多个基于state的getter计算属性的对象
*/
export default {
  totalCount (state) {
    // preTotal初始总数  food.count是cartFoods.reduce对象取得的  0是初始值
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  }
}
