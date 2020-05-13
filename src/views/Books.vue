<template>
  <v-container>
    <div>
      <v-row no-gutters>
        <template v-for="book in books">
          <v-col :key="book">
            <v-card max-width="250" class="pt-2 ma-2">
              <v-img :src="book.image" contain="true" aspect-ratio="0.8"></v-img>

              <v-card-title primary-title>
                <div>
                  <p class="subtitle-2" style="height: 35px">{{ book.title }}</p>
                  <div class="body-2">by {{book.author}}</div>
                  <div class="body-2">${{book.price}}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn outlined small @click="details(book)">Details</v-btn>
                <v-btn outlined small @click="addToCart(book)">Add to cart</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Books",
  data: () => ({
    books: {}, // store in vuex
    cart: []
  }),
  methods: {
    details() {
      this.$router.push({ name: "BookDetails" });
    },
    addToCart(book) {
      this.cart.push(book.id);
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
    cartItemCount() {
      return this.cart.length || "";
    }
  },
  created() {
    this.axios.get("books.json").then(response => {
      this.books = response.data.books;
      console.log(this.books);
    });
  }
};
</script>
