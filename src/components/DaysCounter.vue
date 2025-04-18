<template>
    <div class="days-counter" v-if="totalDays > 0">
        <h4>Días acumulados</h4>
        <div class="counter">{{ totalDays }} días</div>
    </div>
</template>

<script>
export default {
    name: "DaysCounter",
    props: {
        totalDays: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
.days-counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    margin: 20px auto 0 auto;
    max-width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.counter {
    font-size: 48px;
    font-weight: bold;
    color: #e2e2e3;
    margin-top: 10px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h4 {
    color: #d7d5dd;
    margin: 0;
    font-size: 24px;
    font-weight: 500;
}
</style>