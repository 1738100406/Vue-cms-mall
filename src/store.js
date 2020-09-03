import Vue from 'vue'
// 配置vuex
import Vuex from 'vuex'
Vue.use(Vuex)
let car = window.JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
  state: {
    car: car,//购物车数组
  },
  mutations: { //goods={id,count}

    addTocar(state, goods) {
      let flg = false
      state.car.some((item) => {
        if (item.id == goods.id) {
          item.count += goods.count
          flg = true
          return true
        }
      })
      if (!flg) {
        state.car.push(goods)
      }
      localStorage.setItem('car', window.JSON.stringify(state.car))
    },
    updategoodscount(state, goods) {
      state.car.some(item => {
        if (item.id == goods.id) {
          item.count = goods.count
          return true
        }
        localStorage.setItem('car', window.JSON.stringify(state.car))

      })
    },
    delgoodscount(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice('i', 1)
          return true
        }
      })
      localStorage.setItem('car', window.JSON.stringify(state.car))

    },
  },
  getters: {
    totalcount(state) {// 徽标中的商品数量
      let c = 0
      state.car.forEach(item => c += item.count)
      return c
    },
    strids(state) {
      var arr = []
      state.car.forEach(item => arr.push(item.id))
      return arr.join(',')
    },
    countobj(state) {
      var o = {}
      state.car.forEach(item => o[item.id] = item.count)
      return o
      /* O{
        88:5
       }*/
    },
    selectedcount(state){
      let c=0
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    amount(state){
      let c=0
      state.car.forEach(item=>{
        c+=item.count * item.price
      })
      return c
    }
  },
  actions(){//异步操作

  }
})
export default store