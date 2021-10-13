<template>
  <div v-if="this.more" @load="onCompChanged" class="main-container">
    <div class="date-container">
      <h4>Semana 1</h4>
      <div class="row-container">
        <button
          v-for="(day, index) in days"
          :key="index"
          ref="element"
          type="button"
          :class="btnClass"
          @click.once="onDayClicked(index)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>
    <div class="footer" v-if="restDay !== 0">
      {{ ` Restan ${restDay} para completar la cuarentena` }}
    </div>
    <div class="footer" v-else>{{ goodbye }}</div>

    <span class="footer">
      <img src="../assets/logo.png" class="img-logo" /> #quedateencasa</span
    >
  </div>
</template>

<script>
export default {
  name: "Calendar",

  data: function () {
    return {
      restDay: 15,
      goodbye: "Bien!!! valio la pena",
      btnClass: "day",
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
  },
  methods: {
    onDayClicked: function (index) {
      this.$refs.element[index].classList.add("marked-day");
      this.restDay--;
    },

    onCompChanged: function () {
      // eslint-disable-next-line no-debugger
        return this.$emit("added-calendar", (this.more = false));
    },
  },
  props: {
    more: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.date-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.row-container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 1%;
  max-width: 24%;
}

.day {
  cursor: pointer;
  font-size: 32px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 0.4px;
  -webkit-animation: fill 0.6s infinite alternate;
  background-color: #fffb00;
  border: 1px solid rgb(78, 78, 78);
  border-radius: 5px;
  min-height: 60px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 15px 15px 64px 0 rgba(0, 0, 0, 0.3);
}
.day:hover {
  box-shadow: 15px 15px 64px 0 rgba(0, 0, 0, 0.5);
}

.day:active {
  background-color: #bb6d6d !important;
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
.marked-day {
  background-color: #bd7d7d !important;
  border: 1px solid rgb(78, 78, 78);
  animation: none;
  transform: scale(0.98);
  transition: color 0s 9999999s;
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}

@-webkit-keyframes fill {
  from {
    -webkit-text-fill-color: rgba(34, 193, 195, 1);
  }
  to {
    -webkit-text-fill-color: rgba(253, 187, 45, 1);
  }
}
.footer {
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}
.img-logo {
  height: 30px;
  margin-right: 5px;
}
</style>
