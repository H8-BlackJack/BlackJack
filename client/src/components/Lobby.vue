<template>
<div>
  <div class="d-flex justify-content-center my-4">
    <b-card>
      <b-form @submit.prevent="createRoom">
        <b-form-input v-model="text" placeholder="Create New Room"></b-form-input>
        <div class="d-flex justify-content-center mt-2">
          <b-button @click.prevent="createRoom">Create</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
  <div>
    <b-card >
      <b-card>
        <div class="row justify-content-around">
        <b-card :title="room.name" style="width: 18rem;" class="mb-2 mx-1 text-center" v-for="room in rooms" :key="room.id">
          <div class="d-flex justify-content-center">
            <b-button href="#" variant="primary" @click="enterRoom(room.id)">Enter</b-button>
          </div>
        </b-card>
        </div>
      </b-card>
    </b-card>
  </div>
</div>
</template>

<script>
export default {
  name: "Lobby",
  data() {
    return {
      text: '',
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
        console.log(data);
        this.$store.dispatch('getRooms')
      })
      .catch(err => {
        console.log(err);
      })
    },
    enterRoom(id){
      this.$router.push({
        path : `/waiting/${id}`
      })
    }
  },
  computed: {
    rooms: function(){
      return this.$store.state.rooms
    }
  },
  created(){
    console.log(this.$store.state.rooms)
    this.$store.dispatch('getRooms')
  }
}
</script>

<style>

</style>