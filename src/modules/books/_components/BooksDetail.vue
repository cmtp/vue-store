<template>
  <div class="books-detail container">
    <div class="container image">
      <img :src="book.image" :alt="book.name">
    </div>
    <div class="container details">
      <div>
        <strong>{{book.name}}</strong>
      </div>
      <p>
        <strong>Author:</strong>
        {{book.author}}
      </p>
      <p>
        <strong>Price:</strong>
        {{book.price}}
      </p>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="addToCart()">Add To Cart</button>
        </div>
        <div class="control">
          <button class="button is-text" @click="goBack()">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('$_books/getBook', this.$route.params.id);
  },
  computed: {
    book: function() {
      return this.$store.getters['$_books/selectedBook'];
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('$_cart/addBookToCart', this.book);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.books-detail {
  display: flex;
  :nth-child() {
    width: 50%;
  }
  img {
    width: 300px;
  }
}
</style>
