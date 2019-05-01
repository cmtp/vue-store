const setCart = (state, books) => {
  state.cart = books;
};

const updateCart = (state, id, book) => {
  let prod = state.cart.find(book => book.id === id);
  if (prod) {
    prod = book;
  }
};

const removeFromCart = (state, id) => {
  const index = state.all.findIndex(book => book.id === id);
  state.cart.splice(index, 1);
};

const pushBookToCart = (state, book) => {
  state.cart.push(book);
};

const checkout = (state, formData) => {
  state.form = formData;
};
export default {
  setCart,
  updateCart,
  removeFromCart,
  pushBookToCart,
  checkout
};
