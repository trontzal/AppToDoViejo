<template>
  <q-page padding>
    <button
      style="position: absolute; right: 10px;"
      @click="counter++"
    >
      {{ counter }}
    </button>
    <input
      type="text"
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      @mouseleave="alertMessage"
      v-focus
    >

    <button @click="clearMessage">Clear</button>

    <h5
      class="border-grey"
    v-if="message.length">{{ message }}</h5>

    <h6 v-else>No message</h6>

    <hr>

    <p>Uppercase message:{{ messageUpercase }}</p>
    <!-- <p>Lowercase message: {{ message | messageLowerCase }}</p> -->

  </q-page>
</template>

<script>
import Vue from "vue"
Vue.directive('focus', {
  // Cuando el elemento enlazado se inserta en el DOM...
  inserted: function (el) {
    // Enfoca el elemento
    el.focus()
  }
})
export default {
  data(){
    return{
      message: "Hola",
      counter: 0
    }
  },
  computed:{
    messageUpercase(){
      console.log("se usa")
      return this.message.toUpperCase()
    }
  },
  methods: {
    clearMessage(){
      this.message = ""
    },
    alertMessage(){
      alert(this.message)
    }
  },
  // filters: {
  //   messageLowerCase(value) {
  //     return value.toLowerCase();
  //   }
  // },
}
</script>
<style>
  .border-grey{
    border: 1px solid grey;
  }
</style>
