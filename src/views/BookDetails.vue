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
          <p class="body-2"><br/>{{ book.description }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    book: {
      id: 1001,
      title: "The Bucket List: 1000 Adventures Big & Small",
      author: "Kath Stathers",
      description:
        "We all have things we’d like to do—one day—but work, family, school, money, and responsibilities get in the way. This invaluable guide to fun, fantastic, and life-affirming activities features an eclectic range of ideas such as self-improvement, sports-related endeavors, natural wonders, cultural experiences, culinary delights, and more. From glassblowing in the Czech Republic to swimming with dolphins in New Zealand, The Bucket List is the perfect gift for the passionate traveler—an around-the-world, continent-by-continent listing of beaches, museums, monuments, islands, inns, restaurants, mountains, and more.",
      price: 15.99,
      image: "/images/the_bucket_list.jpg"
    }
  })
};
</script>