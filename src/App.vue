<template>
  <v-app>
    <app-navbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    'app-navbar': Navbar
  }
}
</script>
