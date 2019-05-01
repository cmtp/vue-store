<template>
  <div class="checkout-page">
    <div class="flex-item">
      <CartCheckout/>
    </div>
    <div class="flex-item">
        <CartCheckoutResume />
    </div>
  </div>
</template>
<script>
import CartCheckout from '../modules/cart/_components/CartCheckout';
import CartCheckoutResume from '../modules/cart/_components/CartCheckoutResume';

export default {
  components: {
    CartCheckout,
    CartCheckoutResume
  }
};
</script>
<style lang="scss" scoped>
.checkout-page {
    display: flex;
    div.flex-item {
        width: 50%;
    }
}
@media screen and (min-width: 600px) {
    .flex-item {
        width: 100%;
    }
}
</style>
