<template>
  <div class="books-item card" @click="redirectTo(product.id)">
    <div class="card-header">
      <div class="card-header-title">
        <p>{{ product.name }}</p>
      </div>
    </div>
    <div class="card-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-6">
            <strong>Author:</strong>
            {{ product.author }}
          </p>
          <p>
            <strong>Price:</strong>
            {{ product.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BooksItem',
  props: {
    product: Object
  },
  methods: {
    redirectTo(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.books-item {
  margin: 10px;
  width: 320px;
}
img {
  height: 150px;
}
.card-header-title, .card-image {
  text-align: center;
}
@media screen and (max-width: 660px) {
  .books-item {
    margin: 10px auto 10px auto;
  }
}
</style>
