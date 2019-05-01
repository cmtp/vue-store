<template>
  <div>
    <div class="navbar-item has-dropdown is-hoverable">
      <div class="navbar-link">
        <i class="fas fa-shopping-cart"></i>
        <span class="batch" v-if="quantity > 0">{{ quantity }}</span>
      </div>
      <div class="navbar-dropdown is-right">
        <div class="navbar-content">
          <div class="navbar-item">
            <CartList :cart="items" :total="total"/>
          </div>
          <div class="navbar-item">
            <button class="button is-link" @click="redirectToCheckout()">Checkout</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <button @click=""></button> -->
  </div>
</template>
<script>
import store from './_store';
import CartList from './_components/CartList';

export default {
  components: {
    CartList
  },
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
  methods: {
    redirectToCheckout() {
      this.$router.push(`/checkout`);
    }
  },
  created() {
    const STORE_KEY = '$_cart';

    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  mounted() {
    this.$store.dispatch('$_cart/getCart');
  }
};
</script>
<style lang="scss" scoped>
.batch {
  background: red;
  text-align: center;
  color: #fff;
  width: 30px;
  border-radius: 15px;
}
</style>
