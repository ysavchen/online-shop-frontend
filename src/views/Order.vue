<template>
  <v-container>
    <v-card outlined>
      <v-card-title>
        <v-icon color="green">mdi-check</v-icon>
        <div class="ml-1">Order #{{ orderNumber }}</div>
      </v-card-title>
      <v-card-text>
        <div>Delivery:</div>
      </v-card-text>
      <v-card-text>
        <div>Books:</div>
        <v-list>
          <v-list-item-group v-for="book in order.books" :key="book.id">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>{{ book.title }} - ${{ book.price }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div>
          <p class="Subtitle-1 ml-1 mt-1">Total: ${{ total }}</p>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import commons from '@/mixins/commons'

export default {
  name: 'Order',
  data: () => ({
    orderNumber: 0
  }),
  mixins: [commons],
  computed: {
    ...mapGetters(['order']),
    total: function() {
      return this.totalPrice(this.order.books)
    }
  },
  created() {
    const min = 10000
    const max = 1000000
    this.orderNumber = this.getRandomInt(min, max)
  }
}
</script>