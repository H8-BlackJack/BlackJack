<template>
  <div id="game">
    <h3 style="color:white; text-align:center" class="mt-3 mb-3" >Your Card</h3>
    <b-container>
      <b-card style="background-color:rgba(0, 0, 0, 0.438)">
      <div class="d-flex justify-content-center" >
        <div v-for="card in cards" :key="card.id">
          <b-card style="background-color:rgba(0, 0, 0, 0.438)">
            <b-img class="kartu" :src="card.image">
            </b-img>
          </b-card>
        </div>
      </div>
      </b-card>
      <b-card  style="background-color:rgba(0, 0, 0, 0.438)">
        <div class="d-flex justify-content-center">
          <h4 style="color:white" v-if="losegame">You lost!</h4><br>
        <b-button variant="primary" class="mx-1" v-if="gabolehlagi" @click="drawCard()">Draw</b-button>
        <b-button variant="danger" class="mx-1" v-if="gabolehlagi" @click="done()">Done</b-button>
        <b-button variant="secondary" class="mx-1" v-if="gamedone" @click="back()">Return to Lobby</b-button>
        </div>
      </b-card>
      <b-card>
        <h1 class="text-center">Total Value : {{points}}</h1>
        <h1 class="text-center" v-if="lose"> {{text}}</h1>
        <div v-for="player in board" :key="player.name">
        <h1 class="text-center" v-if="lose || gamedone"> 
          {{player.name}}
          {{player.points}}
        </h1>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return{
      idParams: null, 
      cards: [],
      points: null,
      gabolehlagi: true,
// <<<<<<< HEAD
      doneCount: 0,
      totalPlayer: this.$store.state.listPlayer,
// =======
      lose: false,
      text: "Oopss.. You lose!",
      gamedone: false,
      losegame: false,
// >>>>>>> e35522b74fc002d26fed9cc3daeeba4f225680fb
      board: [],
    }
  },
  methods: {
    done(){
      console.log(this.$route.params.id, "JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJjjj");
      this.idParams = this.$route.params.id
      this.$socket.emit('doneGame', {points: this.points , name: localStorage.getItem('name')})
      this.gabolehlagi = false
// <<<<<<< HEAD
      this.doneCount += 1
// =======
      this.gamedone = true
// >>>>>>> e35522b74fc002d26fed9cc3daeeba4f225680fb
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
        if (this.points > 21 || this.board.length === 2) {
          this.points = 0
          this.lose = true
          this.gabolehlagi=false
          this.gamedone = true
          this.losegame = true
          this.done()
        }
      })
      .catch(({response})=>{
        console.log(response);
      })
    },
    back() {
      this.$router.push('/lobby')
      this.$socket.emit('leaveRoom')
      this.$store.commit("removePlayers")
      console.log(this.$route.params.id, "HAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhhhh");
      this.$axios({
        url: `/rooms/${this.idParams}`,
        method: "DELETE",
      })
      .then(data => {
        this.$store.dispatch("getRooms")
        console.log(data);
      })
      .catch(err => {
        console.log(err.response);
      })
    },
    
  },
  created() {
   this.drawCard() 
   this.$socket.on('done', (board) => {
      console.log('BOARD HASIL', board);
      this.board = board 
    })
  }
}
</script>

<style scoped>
  .kartu {
    width: 150px;
  }
  #game {
  /* position: fixed; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #8E0E00;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* background-image: url('../assets/lobby.jpg') */
}
</style>