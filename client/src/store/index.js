import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null
  },
  mutations: {
    rooms(state, payload) {
      // console.log(payload)
      state.rooms = payload;
    }
  },
  actions: {
    getRooms(context) {
      axios({
        url: "http://localhost:3000/rooms",
        method: "get"
      })
        .then(({ data }) => {
          context.commit("rooms", data);
          console.log(data)
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  },
  modules: {}
});
