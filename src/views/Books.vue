<template>
  <v-container>
    <div>
      <v-row no-gutters>
        <template v-for="book in books">
          <v-col :key="book.id">
            <v-card max-width="250" class="pt-2 ma-2">
              <v-img :src="book.image" contain aspect-ratio="0.8"></v-img>

              <v-card-title primary-title>
                <div>
                  <p class="subtitle-2" style="height: 35px">{{ book.title }}</p>
                  <div class="body-2">by {{book.author}}</div>
                  <div class="body-2">${{book.price}}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn outlined small @click="details(book.id)">Details</v-btn>
                <v-btn outlined small @click="addToCart(book.id)">Add to cart</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Books",
  data: () => ({
    cart: []
  }),
  methods: {
    details(bookId) {
      this.$router.push({ name: "bookDetails", params: { id: bookId } });
    },
    addToCart(bookId) {
      this.cart.push(bookId);
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
  computed: {
    ...mapGetters(["books"]),
    cartItemCount() {
      return this.cart.length || "";
    }
  },
  created() {
    this.$store.dispatch("initStore");
  }
};
</script>
