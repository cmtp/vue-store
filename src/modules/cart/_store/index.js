import actions from './cart.actions';
import mutations from './cart.mutations';
import getters from './cart.getters';

const state = {
  cart: [],
  form: {}
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
