<template>
  <div v-show="display">
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
import { mapGetters } from "vuex";

export default {
  name: "BookDetails",
  data: () => ({
    book: {},
    display: false
  }),
  computed: {
    ...mapGetters(["bookWithId"])
  },
  created() {
    const id = this.$route.params.id;
    this.book = this.bookWithId(id);
    if (this.book !== undefined) {
      this.display = true;
    } else {
      this.$store.dispatch("getBookById", id)
        .then(() => {
          this.book = this.bookWithId(id);
          this.display = true;
        })
        .catch(error =>
          console.error(error.name + ": " + error.response.data.message)
        );
    }
  }
};
</script>