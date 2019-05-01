<template>
  <div class="books">
    <div class="books-list">
        <BooksItem :product="product" v-for="product in products" :key="product.name" />
    </div>
  </div>
</template>
<script>
import store from './_store';
import BooksItem from "./_components/BooksItem";

export default {
  name: 'BooksModule',
  components: {
      BooksItem
  },
  computed: {
      products: function () {
        return this.$store.getters['$_books/books']
      }
  },
  created() {
    const STORE_KEY = '$_books';

    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },
  mounted() {
    this.$store.dispatch('$_books/getBooks');
  }
};
</script>
<style lang="scss" scoped>
p {
  text-align: center;
}
.books-list {
  display: flex;
  max-width: 1360px;
  margin: auto;
  flex-wrap: wrap;
}
@media screen and (max-width: 694px) {
  .books-list {
    align-content: center;
  }
}
</style>
