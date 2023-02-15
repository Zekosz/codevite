<template>
  <h1>Barer</h1>
  <ol>
    <li v-for="brewery in breweries">{{ brewery.name }}</li>
  </ol>
</template>


<script>
  export default {
    created() {
      fetch('https://api.openbrewerydb.org/breweries?by_type=bar&per_page=10')
        .then((response) => response.json())
        .then((breweries) => {
          this.breweries = breweries
        })
    },
    data() {
      return {
        breweries: null
      }
    }
  }
</script>