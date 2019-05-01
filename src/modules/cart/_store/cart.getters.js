const items = state => state.cart;
const count = state => state.cart.length;
const cartQuantity = state => {
  let quantity = 0;
  state.cart.forEach(item => {
    quantity += item.quantity;
  });
  return quantity;
};

const total = state => {
  let total = 0;
  state.cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return `${total.toFixed(2)} $us`;
};

export default {
  items,
  count,
  cartQuantity,
  total
};
