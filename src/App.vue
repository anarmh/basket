<template>
  <AppHeader/>
  <AppContainer/>
</template>

<script>
import AppContainer from './components/AppContainer.vue';
import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppContainer
}
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200;300;400&family=Poppins:wght@400;500;600&display=swap');
  body{
    margin: 0;
    color: #262837;
    font-family: 'Poppins', sans-serif;
  }
</style>
