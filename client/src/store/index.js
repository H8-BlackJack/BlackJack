import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
    listPlayer: [],
    userList: [],
  },
  mutations: {
    rooms(state, payload) {
      // console.log(payload)
      state.rooms = payload;
    },
    change_userList(state, payload) {
      state.userList = payload.allUsers;
      console.log('UserList:', state.userList)
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
