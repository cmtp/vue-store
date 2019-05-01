import CartService from '../_api/CartService';

const getCart = async ({ commit }) => {
  let response = await CartService.getCart();
  commit('setCart', response.data);
};

const addBookToCart = async ({ commit, state }, book) => {
  let bookSelected = state.cart.find(item => book.id === item.id);
  if (bookSelected !== undefined) {
    bookSelected.quantity++;
    let response = CartService.updateBookInCart(book.id, book);
    commit('updateCart', response.data);
  } else {
    book.quantity = 1;
    let response = await CartService.addBookToCart(book);
    commit('pushBookToCart', response.data);
  }
};

const updateBookInCart = async ({ commit }, id, Book) => {
  let response = await CartService.updateBookInCart(id, Book);
  commit('updateCart', response.data);
};

const removeFromCart = async ({ commit }, id) => {
  let response = await CartService.removeFromCart(id);
  commit('removeFromCart', response.data);
};

const checkout = async ({ commit }, formData) => {
  let response = await CartService.checkout(formData);
  commit('checkout', response.data);
};

export default {
  getCart,
  addBookToCart,
  updateBookInCart,
  removeFromCart,
  checkout
};
