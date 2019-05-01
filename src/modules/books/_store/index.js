import actions from './books.actions';
import mutations from './books.mutations';
import getters from './books.getters';

const state = {
  all: [],
  selected: {}
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
