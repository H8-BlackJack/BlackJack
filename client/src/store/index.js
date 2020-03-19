import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null
  },
  mutations: {
    rooms(state, payload) {
      state.rooms = payload;
    }
  },
  actions: {
    getRooms(context) {
      this.$axios({
        url: "/rooms",
        method: "post"
      })
        .then(({ data }) => {
        context.commit("rooms", data)
        })
        .catch(({ response }) => {
        console.log(response)
      })
    }
  },
  modules: {}
});
