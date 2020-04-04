<template>
  <div id="app">
    <Calendar title="Calendario de cuarentena"/>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue' 

export default {
  name: 'App',
  components: {
    Calendar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
}
</style>
