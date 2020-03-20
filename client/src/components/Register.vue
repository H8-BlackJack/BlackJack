<template>
    <div class="wrap d-flex justify-content-center align-items-center">
 <h1 style="color: white">
   WELCOME TO
    <br>
      <img src="../assets/vueblackjack.png" alt="" srcset="">
   </h1>       
    <div class="middle">
      <b-container class="">
        <b-card class="rounded">
          <b-card-header
            class="text-center"
            style="background-color: #781105; color: #ffffff; position: relative; margin-top: -60px; border-radius: 20px"
            ><h3>BlackJack</h3></b-card-header
          >
          <b-card-body>
            <b-form @submit.prevent="register">
              <b-form-group
                id="input-group-1"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="name"
                  type="text"
                  required
                  placeholder="Enter Name"
                ></b-form-input>
              </b-form-group>
              <div class="d-flex justify-content-center">
              <b-button type="submit" variant="danger">Submit</b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      name: ''
    }
  },
  methods: {
    register(){
     this.$axios({
        method : 'post',
        url : '/users',
        data : {
          name : this.name
        }
      })
      .then(data=>{
        localStorage.setItem('name', data.data.name)
        localStorage.setItem('id', data.data.id)
        this.$router.push({
          path : '/lobby'
        })
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #8E0E00;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>