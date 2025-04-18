<template>
  <div class="main-container">
    <h3>{{ `Semana ${weekNumber}` }}</h3>
    <div class="date-container">
      <div class="row-container">
        <button 
          v-for="(day, index) in calendarDays" 
          :key="index" 
          type="button" 
          :class="[btnClass, { 'marked-day': day.marked }]"
          :disabled="index !== nextDay" 
          @click="() => onDayClicked(day)"
        >
          {{ day.num + 1 }}
        </button>
      </div>
    </div>
    <div class="footer" v-if="fortnightCount !== 0">
      {{ `Restan ${fortnightCount} días para completar la cuarentena` }}
    </div>
    <div class="footer" v-else>{{ goodbye }}</div>
  </div>
</template>

<script>
export default {
  name: "Calendar",

  data: function () {
    return {
      fortnightCount: 15,
      goodbye: "¡Bien! Valió la pena",
      btnClass: "day",
      nextDay: 0,
      calendarDays: this.createCalendar(15)
    };
  },

  methods: {
    onDayClicked: function (day) {
      if (!day.marked) {
        day.marked = true;
        this.fortnightCount--;
        this.nextDay++;
        
        if (this.fortnightCount === 0) {
          this.$emit("added-calendar");
        }
      }
    },

    createCalendar(qty) {
      let calendarBtn = [{
        num: 0,
        marked: false
      }];

      for (let i = 1; i <= qty - 1; i++) {
        calendarBtn.push({
          num: i,
          marked: false
        });
      }

      return calendarBtn;
    }
  },

  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
    weekNumber: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

h3 {
  color: #ffffff;
  margin-bottom: 20px;
}

.date-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 1%;
  max-width: 500px;
  width: 100%;
}

.day {
  cursor: pointer;
  font-size: 24px;  	
  color: #2c3e50;
  background-color: #ffffff;
  border: 2px solid #007BFF;
  border-radius: 8px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.day:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.day:active {
  transform: scale(0.95);
}

.day:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.marked-day {
  background-color: #007BFF !important;
  color: #ffffff !important;
  border-color: #0056b3;
  transform: scale(0.95);
}

.footer {
  margin-top: 20px;
  color: #ffffff;
  font-size: 18px;
}
</style>
