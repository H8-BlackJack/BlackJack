<template>
<div class="wrap">
  <div class="d-flex justify-content-center my-4">
    <b-card id="card">
      <b-form @submit.prevent="createRoom">
        <b-form-input v-model="text" placeholder="Create New Room"></b-form-input>
        <div class="d-flex justify-content-center mt-2">
          <b-button @click.prevent="createRoom" class="btn btn-dark">Create</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
  <div>
    <h3 class="text-light text-center">Welcome to game</h3>
    <h2 class="text-light text-center">{{namePlayer}}</h2>
  </div>
  <div>
    <b-card id="card">
      <h3 style="color : white;">Blackjack Room List</h3>
      <b-card id="card">
        <div class="row justify-content-around">
        <b-card :title="room.name" style="width: 18rem; background-color : rgba(0, 0, 0, 0.438); color : white" class="mb-2 mx-1 text-center" v-for="room in rooms" :key="room.id">
          <div class="d-flex justify-content-center">
            <b-button href="#" variant="danger" @click="enterRoom(room.id)">Enter</b-button>
          </div>
        </b-card>
        </div>
      </b-card>
    </b-card>
  </div>
</div>
</template>

<script>
import sonic from '../assets/y2mate.com - Pirates of the Caribbean (Auckland Symphony Orchestra) 1080p_6zTc2hD2npA.mp3'

export default {
  name: "Lobby",
  data() {
    return {
      text: '',
      namePlayer: localStorage.getItem("name")
    }
  },
  methods: {
    createRoom() {
      this.$axios({
        url: '/rooms',
        method: "post",
        data:{
          name: this.text
        }
      })
      .then(data => {
        this.$socket.emit('createRoom')
        console.log(data.data.name);
        this.$store.dispatch('getRooms')
        this.text = ''
      })
      .catch(err => {
        console.log(err);
      })
    },
    enterRoom(id){
      this.$socket.emit('joinRoom', {id, user: localStorage.getItem('name')})
      this.$router.push({
        path : `/waiting/${id}`
      })
    },
    
    playSound (sound) {
      console.log('masukkkk heh');
      
    if(sound) {
      var audio = new Audio(sound);
      audio.play();
    }
  }
  },
  computed: {
    rooms: function(){
      return this.$store.state.rooms
    },
  },
  created(){
    console.log(this.$store.state.rooms)
    this.$store.dispatch('getRooms')
    this.$socket.on('fetchRoomUlang', () => {
      console.log('masuk emitanny fetchRoomUlang')
      this.$store.dispatch("getRooms")
    })
  },
  mounted() {
    this.playSound(sonic)
  }
}
</script>

<style scoped>
  .wrap {
  /* position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background: #8E0E00;  fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #1F1C18, #8E0E00); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-image: url('../assets/thumb-1920-794090.jpg');
  /* width: 100%; */
  /* background-image: url('../assets'); */
  background-position: center;
}
#card {
  background-color: rgba(142, 14, 0, 0.315)
}
.row{
  background-color: rgba(0, 0, 0, 0.438)
}
#room{
  background-color: rgba(0, 0, 0, 0.438)
}
</style>