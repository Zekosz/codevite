<script>
  export default {
    data() {
      return { beerName: 'Skriv in ditt favoritöl!',
    beer: true }
    },
    methods: {
    onClick() {
      alert("Du gillar öl")
    }
  },
  }
</script>

<template>
  <input type="text" v-model="beerName">
<input @click="onClick" type="button" :value="beerName" >
<input @click="beer = !beer" type="button" value="Jag dricker inte öl" >
<p> Du dricker gärna {{ beerName }}</p>
<p v-if="beer">Öl är gott!</p>
<p v-else>Fel svar!</p>
</template>