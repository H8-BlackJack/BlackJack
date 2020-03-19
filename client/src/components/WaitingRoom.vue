<template>
  <div>
    <div v-for="player in players" :key="player.id">
    <b-card>
      {{player.name}}
    </b-card>
    </div>
    <b-button @click.prevent="playGame">PLAY</b-button>
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
  }
}
</script>

<style>

</style>