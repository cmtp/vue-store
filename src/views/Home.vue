<template>
  <div class="home">
    <h1 class="title">Books Store</h1>
    <Books />
  </div>
</template>

<script>
// @ is an alias to /src
import Books from '@/modules/books';

export default {
  name: 'home',
  components: {
    Books
  }
};
</script>
