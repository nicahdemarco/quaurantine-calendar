<template>
  <div id="app">
    <div class="gradient-background"></div>
    <h1>{{ title }}</h1>
    <WelcomeMessage :show="showWelcomeMessage" />
    <DaysCounter :total-days="totalDays" />
    <!-- Selecciona la fecha -->
    <div class="calendars-container">
      <div class="calendar-wrapper" v-if="currentCalendar">
        <Calendar :is-expanded="true" :week-number="calendars.length" :key="`calendar-${currentCalendar.id}`"
          @added-calendar="handleCalendarComplete(calendars.length - 1)" />
      </div>
      <button class="start-btn" @click="addMoreDays" :disabled="calendars.length > 0 && !isCurrentCalendarComplete">
        {{ calendars.length === 0 ? 'Empezar cuarentena' : 'Agregar quincena' }}
      </button>
    </div>
    <!-- <more-days title="Calendario de cuarentena" /> -->
    <div class="footer">

      <span class="logo-container">
        <img src="./assets/logo.png" class="img-logo" /> #quedateencasa
      </span>
      <h6>
        Respetar la cuarentena asegura el retraso de la propagación del virus
      </h6>
      <div class="footer-signature">
        <span class="footer-text">Made with &#129299; &#129327; &#128525; by</span>
        <span class="signature">nicahdemarco</span>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";
import DaysCounter from "./components/DaysCounter.vue";
import WelcomeMessage from "./components/WelcomeMessage.vue";

export default {
  name: "App",
  components: {
    Calendar,
    DaysCounter,
    WelcomeMessage
  },

  data: function () {
    return {
      title: "Calendario de cuarentena",
      calendars: [],
      showWelcomeMessage: true
    };
  },

  computed: {
    isCurrentCalendarComplete() {
      if (this.calendars.length === 0) return true;
      return this.calendars[this.calendars.length - 1].isComplete;
    },

    totalDays() {
      return this.calendars.filter(calendar => calendar.isComplete).length * 15;
    },

    currentCalendar() {
      return this.calendars.length > 0 ? this.calendars[this.calendars.length - 1] : null;
    }
  },

  methods: {
    addMoreDays: function () {
      this.showWelcomeMessage = false;
      this.calendars.push({
        id: Date.now(),
        isComplete: false
      });
    },

    handleCalendarComplete(index) {
      this.calendars[index].isComplete = true;
    }
  },
};
</script>

<style>
body {
  margin: 0;
}

.gradient-background {
  margin: 0;
  background: linear-gradient(120deg,
      #FF3B7F 0%,
      #E637B3 20%,
      #A435F0 50%,
      #7150F2 80%,
      #4B6BF0 100%);
  background-size: 200% 200%;
  animation: gradientBG 15s ease infinite;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
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
  min-height: 100vh;
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

.start-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.start-btn:disabled:hover {
  background-color: #cccccc;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin-top: 1%;
}

.footer-signature {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 2% 0;
  color: white;
  font-size: 14px;
  gap: 8px;
}

.footer-text {
  white-space: nowrap;
}

.signature {
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  background: linear-gradient(100deg,
      #e81d1d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3);

  background-size: 800% 800%;

  -webkit-animation: gradientFlow 18s ease-in-out infinite;
  -z-animation: gradientFlow 18s ease-in-out infinite;
  -o-animation: gradientFlow 18s ease-in-out infinite;
  animation: gradientFlow 18s ease-in-out infinite;
}

@-webkit-keyframes gradientFlow {
  0% {
    background-position: 0% 82%;
  }

  50% {
    background-position: 100% 19%;
  }

  100% {
    background-position: 0% 82%;
  }
}

@-moz-keyframes gradientFlow {
  0% {
    background-position: 0% 82%;
  }

  50% {
    background-position: 100% 19%;
  }

  100% {
    background-position: 0% 82%;
  }
}

@-o-keyframes gradientFlow {
  0% {
    background-position: 0% 82%;
  }

  50% {
    background-position: 100% 19%;
  }

  100% {
    background-position: 0% 82%;
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 82%;
  }

  50% {
    background-position: 100% 19%;
  }

  100% {
    background-position: 0% 82%;
  }
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
  font-size: 20px;
  font-weight: 500;
  margin: auto;
}

.days-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 8px;
  margin: 20px auto 0;
  max-width: 300px;
}

.counter {
  font-size: 36px;
  font-weight: bold;
  color: #007BFF;
  margin-top: 10px;
}

.days-counter h4 {
  color: #ffffff;
  margin: 0;
  font-size: 24px;
}

.calendars-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
}

.calendar-wrapper {
  width: 100%;
  max-width: 800px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
