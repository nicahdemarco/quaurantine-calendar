<template>
  <div class="welcome-message" v-if="show">
    <h2>¡Bienvenido a tu Calendario de Cuarentena!</h2>
    <p>Mantén un registro de tu tiempo en cuarentena y ayuda a frenar la propagación del virus.</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.welcome-message {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  animation: fadeIn 0.5s ease;
}

.welcome-message h2 {
  color: #ffffff;
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 600;
}

.welcome-message p {
  color: #ffffff;
  margin: 0;
  font-size: 18px;
  opacity: 0.9;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 