<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- cantidad total -->
    <h4 v-show="weekCounter > 0">{{ `Semana: ${weekCounter}` }}</h4>

    <!-- Selecciona la fecha -->

    <div>
      <Calendar :more="more" title="semana 1" @added-calendar="more = false" />
      <button class="start-btn" @click="addMoreDays">{{ !more ? 'Empezar cuarentena' : 'Agregar quincena' }}</button>
    </div>
    <!-- <more-days title="Calendario de cuarentena" /> -->
    <div class="footer">
      <span class="logo-container">
        <img src="./assets/logo.png" class="img-logo" /> #quedateencasa
      </span>
      <h6>
        Respetar la cuarentena asegura el retraso de la propagacion del virus
      </h6>
    </div>
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";

export default {
  name: "App",
  components: {
    Calendar,
  },

  data: function () {
    return {
      title: "Calendario de cuarentena",
      more: false,
      weekCounter: 0,
    };
  },

  methods: {
    addMoreDays: function () {
      this.more = true;
      this.weekCounter++
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

.start-btn {
  background-color: #007BFF;
  color: white;
  padding: 8px 16px;
  margin: 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-btn:hover {
  background-color: #0056b3;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin-top: 1%;
}

.logo-container {
  display: flex;
  align-items: center;
}

.img-logo {
  height: 30px;
  margin-right: 5px;
}

h6 {
  display: flex;
  font-weight: 500;
}
</style>
