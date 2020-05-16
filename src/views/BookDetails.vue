<template>
  <div v-show="book.id != 0">
    <v-container class="float-left">
      <v-row>
        <v-col sm="5">
          <div>
            <v-img :src="book.image" contain aspect-ratio="0.8"></v-img>
          </div>
        </v-col>
        <v-col>
          <div>
            <p class="title" style="height: 20px">{{ book.title }}</p>
            <div class="subtitle-1">by {{ book.author }}</div>
            <div class="body-2">${{ book.price }}</div>
            <p class="body-2">
              <br />
              {{ book.description }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BookDetails',
  data: () => ({
    book: {
      id: 0,
      title: "",
      description: "",
      author: "",
      image: "",
      price: 0.0
    }
  }),
  computed: {
    ...mapGetters(['bookWithId'])
  },
  watch: {
    book: function(bookData) {
      this.book = bookData;
    }
  },
  created() {
    const id = this.$route.params.id;
    const storedBook = this.bookWithId(id);
    if (storedBook !== undefined) {
      this.book = storedBook;
    } else {
      this.$store.dispatch('getBookById', id)
        .then(() => this.book = this.bookWithId(id))
        .catch(error => console.error(error));
    }
  }
};
</script>