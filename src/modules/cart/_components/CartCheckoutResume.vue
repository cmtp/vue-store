<template>
  <div v-if="items.length !== 0" class="panel">
    <div>
      <strong>Cart Resume</strong>
    </div>
    <div class="flex-container" v-for="item in items" :key="item.id">
      <div class="item-img">
        <img :src="item.image">
      </div>
      <div class="item-detail">
        <div>
          <strong><p>{{item.name}}</p></strong>
        </div>
        <div>
          <strong>Quantity:</strong>
          {{item.quantity}}
        </div>
        <div>
          <strong>Price:</strong>
          {{(item.price * item.quantity).toFixed(2)}} $us
        </div>
      </div>
    </div>
    <div class="navbar-item">
      <strong>Total: {{total}}</strong>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters['$_cart/items'];
    },
    count() {
      return this.$store.getters['$_cart/count'];
    },
    quantity() {
      return this.$store.getters['$_cart/cartQuantity'];
    },
    total() {
      return this.$store.getters['$_cart/total'];
    }
  },

};
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  .item-img {
    width: 50%;
  }
  .item-detail {
    width: 50%;
  }
}
.panel {
  background: rgb(216, 216, 216);
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
}
img {
  width: 200px;
}
</style>
