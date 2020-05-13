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
export default {
  name: "Navbar",
  methods: {
    registerForm() {
      this.$router.push({ name: "Register" });
    },
    loginForm() {
      this.$router.push({ name: "Login" });
    },
    checkout() {
      this.$router.push({ name: "Checkout" });
    }
  },
  data: () => ({
    sitename: "Online Store",
    cartItemCount: 0 //change by click via vuex ?
  })
};
</script>