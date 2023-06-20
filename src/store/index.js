import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pkms:[],
    pkmImg:''
  },
  getters: {
  },
  mutations: {
    SET_PKMNS: (state, pkmn)=>{
      state.pkms = pkmn
      state.pkmImg = pkmn.sprites.front_default
    }
  },
  actions: {
    getPkmns:({commit}, nameId)=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${nameId}`)
      .then(resp => {
        commit('SET_PKMNS', resp.data)
      })
      .catch(e=>console.log(e))
    }
  },
  modules: {
  }
})
