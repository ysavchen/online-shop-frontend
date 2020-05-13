<template>
  <v-container>
    <div></div>
    <div>
      <v-row>
        <v-col>
          <form action>
            <strong>Delivery address</strong>
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Address"></v-text-field>
            <v-text-field label="Zipcode"></v-text-field>
            <v-text-field label="City"></v-text-field>
            <v-text-field label="Phone"></v-text-field>
            <v-text-field label="E-mail"></v-text-field>
          </form>
        </v-col>
        <v-col>
          <v-list>
            <v-list-item-group>
              <template v-for="book in cart">
                  <v-list-item :key="book.id">
                    <v-list-item-avatar left tile size="65">
                      <v-img :src="book.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{book.title }}</v-list-item-title>
                      <v-list-item-subtitle>by {{book.author}}</v-list-item-subtitle>
                      <v-list-item-subtitle>${{book.price}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="deleteFromCart(book)">
                        <v-icon color="red">mdi-close</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Checkout",
  data: () => ({}),
  computed: {
    ...mapGetters(["cart"])
  },
  methods: {
    deleteFromCart(book) {
      this.$store.dispatch("deleteFromCart", book);
    }
  }
};
</script>