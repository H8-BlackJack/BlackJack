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
        <b-button variant="primary" class="mx-1" v-if="gabolehlagi" @click="drawCard()">Draw</b-button>
        <b-button variant="danger" class="mx-1" v-if="gabolehlagi" @click="done()">Done</b-button>
        </div>
      </b-card>
      <b-card>
        <h1 class="text-center">{{points}}</h1>
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
      points: null,
      gabolehlagi: true
    }
  },
  methods: {
    done(){
      this.gabolehlagi = false
    },
    drawCard(){
        this.$axios({
        url: '/api',
        method: 'post',
        data: {
          idRoom: this.$route.params.id
        }      
      })
      .then(({data}) => {
        // console.log(data.cards[0]);
        // console.log(data.cards[0].value)
        // if (data.cards[0].value == ) {
          
        // } else {
          
        // }
        this.cards.push(data.cards[0])
        this.points = 0
        this.cards.forEach(el => {
          if (el.value == "JACK" || el.value == "QUEEN" ||el.value == "KING" ) {
            this.points += 10
          } else if (el.value == "ACE") {
            this.points += 11
          } else {
            this.points += Number(el.value)
          }
        })
        if (this.points > 21) {
          this.gabolehlagi=false
        }
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