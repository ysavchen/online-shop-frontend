<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="elevation-12">
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="firstName"
                :rules="[rules.required]"
                label="First Name"
                maxlength="20"
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                :rules="[rules.required]"
                label="Last Name"
                maxlength="20"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.emailValidity]"
                label="E-mail"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.minChars]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <v-text-field
                block
                v-model="confirmPassword"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, passwordMatch]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm Password"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed color="primary" :disabled="!valid" @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formRules from '@/mixins/formRules'
import { mapGetters } from 'vuex'

export default {
  name: 'Register',
  data: () => ({
    valid: true,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    show1: false
  }),
  mixins: [formRules],
  computed: {
    ...mapGetters(['user']),
    passwordMatch() {
      return () =>
        this.password === this.confirmPassword || 'Password must match'
    }
  },
  methods: {
    submit() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('register', userData)
          .then(() => {
            const userId = this.user.id
            this.$router.push({ name: 'userOrders', params: { id: userId } })
          })
          .catch(error => console.error(error))
      }
    }
  }
}
</script>