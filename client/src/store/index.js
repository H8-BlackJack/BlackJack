import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
    listPlayer: []
  },
  mutations: {
    rooms(state, payload) {
      // console.log(payload)
      state.rooms = payload;
    },
    listPlayer(state, payload) {
      console.log(payload, " JANXUKKK")
      state.listPlayer.push(payload)
      console.log(state.listPlayer, "BANGSUYY");
      
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
