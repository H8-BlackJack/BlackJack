<template>
  <div>
    <b-container>
      <b-card >
      <div class="d-flex justify-content-center">
        <div v-for="card in cards" :key="card.id">
          <b-card>
            <b-img class="kartu" :src="card.image">
            </b-img>
          </b-card>
        </div>
      </div>
      </b-card>
      <b-card>
        <div class="d-flex justify-content-center">
        <b-button variant="primary" class="mx-1" @click="drawCard()">Draw</b-button>
        <b-button variant="danger" class="mx-1">Done</b-button>
        </div>
      </b-card>
      <b-card>
        <h1 class="text-center">POINT</h1>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return{
      cards: [],
    }
  },
  methods: {
    drawCard(){
        this.$axios({
        url: '/api',
        method: 'post',
        data: {
          idRoom: this.$route.params.id
        }      
      })
      .then(({data}) => {
        console.log(data.cards[0]);
        this.cards.push(data.cards[0])
      })
      .catch(({response})=>{
        console.log(response);
      })
    }
  },
  created() {
   this.drawCard() 
  }
}
</script>

<style scoped>
  .kartu {
    width: 150px;
  }
</style>