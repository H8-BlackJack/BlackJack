<template>
<div>
  <div class="d-flex justify-content-center my-4">
    <b-card>
      <b-form>
        <b-form-input v-model="text" placeholder="Create New Room"></b-form-input>
        <div class="d-flex justify-content-center mt-2">
          <b-button>Create</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
  <div>
    <b-card>
      <b-card class="">
        <b-card title="Card Title" tag="Room" style="width: 20rem;" class="mb-2">
          <div class="d-flex justify-content-center">
            <b-button href="#" variant="primary">Enter</b-button>
          </div>
        </b-card>
      </b-card>
    </b-card>
  </div>
</div>
</template>

<script>
export default {
  name: "Lobby",
}
</script>

<style>

</style>