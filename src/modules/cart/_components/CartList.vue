<template>
  <div v-if="cart.length !== 0">
    <div>
      <strong>Cart List</strong>
    </div>
    <div class="navbar-item flex-container" v-for="item in cart" :key="item.id">
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
          {{item.price * item.quantity}} $us
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
  props: ['cart', 'total']
};
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  .item-img {
    width: 20%;
  }
  .item-detail {
    width: 80%;
  }
}
img {
  height: 20px !important;
}
</style>
