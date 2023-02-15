<script>
  export default {
    created() {
      fetch('https://api.openbrewerydb.org/breweries?by_state=california&per_page=10')
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

<template>
  <ol>
    <li v-for="brewery in breweries">{{ brewery.name }}</li>
  </ol>
</template>
