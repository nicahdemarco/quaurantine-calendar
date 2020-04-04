<template>
  <div class="main-container">
    <h1>{{ title }}</h1>
    <!-- <p>Respetar la cuarentena asegura el retraso de la propagacion del virus</p> -->
    <!-- <div class="header">
      Selecciona la fecha
    </div> -->
    <div class="date-container">
      <div class="row-container">
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[0] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[0] }"
        >
          1
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[1] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[1] }"
        >
          2
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[2] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[2] }"
        >
          3
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[3] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[3] }"
        >
          4
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[4] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[4] }"
        >
          5
        </button>
      </div>

      <div class="row-container">
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[5] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[5] }"
        >
          6
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[6] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[6] }"
        >
          7
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[7] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[7] }"
        >
          8
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[8] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[8] }"
        >
          9
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[9] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[9] }"
        >
          10
        </button>
      </div>

      <div class="row-container">
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[10] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[10] }"
        >
          11
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[11] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[11] }"
        >
          12
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[12] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[12] }"
        >
          13
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[13] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[13] }"
        >
          14
        </button>
        <button
          type="button"
          @click.once="subtractADay(), (isMarked[14] = true)"
          class="day"
          :class="{ 'marked-day': isMarked[14] }"
        >
          15
        </button>
      </div>
    </div>
    <div class="footer" v-if="rest != 0">
      {{ ` Restan ${rest} para completar la cuarentena` }}
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

  data: function() {
    return {
      title: "Calendario de cuarentena",
      rest: 15,

      isMarked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      goodbye: "Bien!!! valio la pena"
    };
  },
  methods: {
    subtractADay: function() {
      this.rest--;
    }
  },
  computed: {

      markADay: function () {

        return {
          isMarked: this.isMarked
        }
      }

  }
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
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 1%;
}

.day {
  font-size: 32px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 0.4px;
  -webkit-animation: fill 0.6s infinite alternate;
  background-color: #fffb00;
  border: 1px solid rgb(78, 78, 78);
  border-radius: 5px;
  min-height: 80px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 15px 15px 64px 0 rgba(0, 0, 0, 0.3);
}
.day:hover {
  box-shadow: 15px 15px 64px 0 rgba(0, 0, 0, 0.5);
}

.marked-day {
  background-color: red;
  border: 3px solid rgb(78, 78, 78);
  animation: none;
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
