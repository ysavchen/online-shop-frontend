<template>
  <v-app>
    <app-navbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar'

export default {
  name: 'App',

  components: {
    'app-navbar': AppNavbar
  }
}
</script>
