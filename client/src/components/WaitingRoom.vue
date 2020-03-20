<template>
  <div id="waiting">
    <h2  style="color : white; padding-top:30px; padding-bottom:10px; text-align:center; backgtound-radius: 50px;">Room {{this.$route.params.id}} Player List</h2>
    <div class="container" v-for="player in players" :key="player.id">
    <b-card style="color:white; background-color: black; font-size : 40px">
      <h2>{{player}}</h2>
    </b-card>
    </div>
<!-- <<<<<<< HEAD
======= -->
    <div class="container">
    <b-button @click.prevent="playGame" v-if="players.length >=2" class="mt-3 ml-3 btn btn-warning">PLAY</b-button>
    <!-- <b-button  @click.prevent="playGame" class="mt-3 ml-3 btn btn-warning">PLAY</b-button> -->
    </div>
<!-- >>>>>>> e35522b74fc002d26fed9cc3daeeba4f225680fb -->
  </div>
</template>

<script>
export default {
  name: "WaitingRoom",
  data() {
    return {
      players: this.$store.state.listPlayer,
    }
  },
  methods: {
    playGame() {
      this.$router.push({ path: `/game/${this.$route.params.id}`})
        this.$socket.emit('playGame')
    },
  },
  computed: {
    // playerList() {
    //   this.players = 
    // }
  },
  created() {
      // this.players.push(localStorage.getItem('name'))
      this.$socket.on('playerJoin', (user) => {
      console.log(user,'masuk ke room')
      // this.players.push(user)
      this.$store.commit("listPlayer", user)
      console.log(this.players, 'INI CUK');
      console.log(this.$store.state.playerList, 'HAAAAA');
      
      // this.players = users
      // console.log(users[0])
      })
      this.$socket.on('StartGame', () => {
      // console.log(user,'masuk ke room')
      // this.players.push(user)
      // this.$store.commit("listPlayer", user)
      console.log('PLAYGAME CUYY');
      // console.log(this.$store.state.playerList, 'HAAAAA');
      this.$router.push({ path: `/game/${this.$route.params.id}`})
      // this.players = users
      // console.log(users[0])
      })
  },
  // watch: {
  //   players() {
  //     this.$socket.on('playerJoin', (user) => {
  //     console.log(user,'masuk ke room')
  //     this.players.push(user)
  //     console.log(this.players, 'INI CUK');
      
  //     // this.players = users
  //     // console.log(users[0])
  //     })
  //   }
  // }
}
</script>

<style scoped>
#waiting {
  /* position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  background: #8E0E00;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* background-image: url('../assets/lobby.jpg') */
}
</style>