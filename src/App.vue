<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- cantidad total -->

    <!-- <div class="header">
      Selecciona la fecha
    </div> -->
    <div>
      <Calendar 
        :more="more"
        title="semana 1"
        @added-calendar='more=false'
        />
      <button @click="isMoreDays">Add Days</button>
    </div>
    <!-- <more-days title="Calendario de cuarentena" /> -->

    <h6>
      Respetar la cuarentena asegura el retraso de la propagacion del virus
    </h6>
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";
// import MoreDays from "./components/MoreDays.vue";

export default {
  name: "App",
  components: {
    Calendar,
    // MoreDays,
  },

  data: function () {
    return {
      title: "Calendario de cuarentena",
      more: false,
    };
  },

  methods: {
    isMoreDays: function () {
      return (this.more = true);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
h1 {
  padding-top: 1%;
  margin: 0;
}
h6 {
  font-weight: 500;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100vh;
  font-size: 24px;
}
</style>
