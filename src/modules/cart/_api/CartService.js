import Api from '../../../api/api';

const API = Api();
export default {
  getCart() {
    return API.get('/cart');
  },

  addBookToCart(book) {
    return API.post('/cart', book);
  },

  updateBookInCart(id, book) {
    return API.put(`/cart/${id}`, book);
  },

  removeFromCart(id) {
    return API.delete(`/cart/${id}`);
  },

  sendSubmit(checkoutForm) {
    return API.post('/checkout', checkoutForm);
  }
};
