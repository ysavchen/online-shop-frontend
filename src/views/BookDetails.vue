<template>
  <v-container class="float-left">
    <v-row>
      <v-col sm="5">
        <div>
          <v-img :src="book.image" contain="true" aspect-ratio="0.8"></v-img>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    book: {}
  }),
  computed: {
    ...mapGetters(["books"])
  },
  created() {
    this.book = this.books.filter(data => data.id == this.$route.params.id)[0];
  }
};
</script>