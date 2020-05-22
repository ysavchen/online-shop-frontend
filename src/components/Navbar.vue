<template>
  <v-app-bar app light>
    <v-toolbar-title>
      <router-link style="text-decoration: none; color: inherit;" to="/">{{ sitename }}</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div v-if="!isLoggedIn">
      <v-btn depressed class="primary mr-4" @click="register">Register</v-btn>
      <v-btn depressed class="primary mr-4" @click="login">Login</v-btn>
    </div>
    <div v-else>
      <v-btn depressed class="primary mr-4" @click="logout">Logout</v-btn>
    </div>

    <div>
      <v-btn icon @click="openCheckout">
        {{ cartItemCount }}
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data: () => ({
    sitename: 'Online Store'
  }),
  methods: {
    register() {
      this.$router.push({ name: 'register' })
    },
    login() {
      this.$router.push({ name: 'login' })
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'books' })
    },
    openCheckout() {
      this.$router.push({ name: 'checkout' })
    }
  },
  computed: {
    ...mapGetters(['cart', 'token']),
    cartItemCount() {
      return this.cart.length
    },
    isLoggedIn() {
      return this.token !== undefined
    }
  }
}
</script>