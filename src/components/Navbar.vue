<template>
  <v-app-bar app light>
    <v-toolbar-title>
      <router-link style="text-decoration: none; color: inherit;" to="/">{{ sitename }}</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div>
      <v-btn depressed class="primary mr-4" @click="registerForm">Register</v-btn>

      <v-btn depressed class="primary mr-4" @click="loginForm">Login</v-btn>

      <v-btn icon @click="checkout">
        {{ cartItemCount }}
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  data: () => ({
    sitename: "Online Store",
  }),
  methods: {
    registerForm() {
      this.$router.push({ name: "register" });
    },
    loginForm() {
      this.$router.push({ name: "login" });
    },
    checkout() {
      this.$router.push({ name: "checkout" });
    },
  },
  computed: {
    ...mapGetters(["cart"]),
    cartItemCount() {
      return this.cart.length;
    }
  }
};
</script>