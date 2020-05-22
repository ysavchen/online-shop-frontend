<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-list class="py-0">
            <v-list-item-group v-for="order in userOrders" :key="order.id">
              <template>
                <v-list-item>
                  {{ order.id }}
                  <!-- <v-list-item-avatar left tile size="65">
                    <v-img :src="book.image"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ book.title }}</v-list-item-title>
                    <v-list-item-subtitle>by {{ book.author }}</v-list-item-subtitle>
                    <v-list-item-subtitle>${{ book.price }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon @click="deleteFromCart(book)">
                      <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-action>-->
                </v-list-item>
                <v-divider></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserOrders',
  data: () => ({}),
  computed: {
    ...mapGetters(['userOrders'])
  }
}
</script>