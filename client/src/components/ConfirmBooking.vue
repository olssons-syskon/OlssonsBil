<template>
    <article class="confirm-booking">
        <section class="confirm-booking-containter">
            <div class="booking-from-date"><h3>From: </h3>{{ booking.fromDate }}</div>
            <div class="booking-to-date"><h3>To: </h3>{{ booking.toDate }}</div>
            <div class="booking-car"><h3>Car: </h3>{{ booking.car }}</div>
            <div class="booking-cost"><h3>Cost: </h3>{{ booking.cost }}</div>
            <div class="booking-name"><h3>Name: </h3>{{ booking.booker }}</div>
            <button @click="confirmBooking">Confirm Booking</button>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            booking: {
                fromDate: new Date(2019, 4, 7),
                toDate: new Date(2019, 5, 24),
                car: 'Tumbler',
                cost: 5907,
                booker: 'Je joe'
            }
        }
    },
    computed: {
        cars() {
            return this.getters.getCars
        }
    },
    methods: {
        confirmBooking() {
            this.$store.dispatch('createBooking', this.booking)
        }
    }
}
</script>

<style>
    .confirm-booking-containter {
        background: #000;
    }
    div {
        color: #39ff14;
    }
    h3 {
        margin: 0;
        color: rgb(255, 0, 179)
    }
</style>
