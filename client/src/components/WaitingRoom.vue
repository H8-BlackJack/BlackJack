<template>
  <div id="waiting">
    <h2 style="color : white; padding-top:30px; padding-bottom:10px; text-align:center">Room {{this.$route.params.id}} Player List</h2>
    <div v-for="player in players" :key="player.id">
    <b-card style="color:white; background-color: black; font-size : 40px">
      {{player}}
    </b-card>
    </div>
    <b-button @click.prevent="playGame" class="mt-3 ml-3 btn btn-warning">PLAY</b-button>
  </div>
</template>

<script>
export default {
  name: "WaitingRoom",
  data() {
    return {
      players: [],
    }
  },
  methods: {
    playGame() {
      this.$router.push({ path: `/game/${this.$route.params.id}`})
    }
  },
  created() {
      this.players.push(localStorage.getItem('name'))
  }
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