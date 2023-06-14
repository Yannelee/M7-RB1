<template>
  <div id="app">
    <Pkm/>
  </div>
</template>

<script>
import Pkm from "@/components/Pkm.vue"
export default {
  name: 'App',
  components: {
    Pkm
  }
}
</script>

<style>
body{
  background: url('@/assets/pkmBackground.png')
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
</style>
