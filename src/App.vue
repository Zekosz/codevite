<script>
  import BreweryList from './components/BreweryList.vue'
  import EnRubrik from './components/EnRubrik.vue'
import TextBox from './components/TextBox.vue'
  export default {
    components: {
      BreweryList,
      EnRubrik,
      TextBox
    }
  }
</script>

<template>
  <nav>
  <ul>
    <li>
      <RouterLink to="/">Hem</RouterLink>
    </li>
    <li>
      <RouterLink to="/breweries">Bryggerier</RouterLink>
    </li>
    <li>
      <RouterLink to="/bars">Barer</RouterLink>
    </li>
  </ul>
</nav>
<main>
  <RouterView />
</main>
  <EnRubrik msg="Bryggerier i Kalifornien" />
  <BreweryList />
  <TextBox/>
</template>
