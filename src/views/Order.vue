<template>
  <v-container>
    <v-card outlined>
      <v-card-title>
        <v-icon color="green">mdi-check</v-icon>
        <div class="ml-1">Order #{{ orderNumber }}</div>
      </v-card-title>
      <v-card-text>
        <div>Delivery:</div>
      </v-card-text>
      <v-card-text>
        <div>Books:</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Order",
  data: () => ({
    orderNumber: 0
  }),
  computed: {
    ...mapGetters(["order"])
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  created() {
    const min = 10000;
    const max = 1000000;
    this.orderNumber = this.getRandomInt(min, max);
  }
};
</script>