const setBooks = (state, books) => {
  state.all = books;
};

const setSelectedBook = (state, book) => {
  state.selected = book;
};

const updateBook = (state, id, book) => {
  let prod = state.all.find(book => book.id === id);
  if (prod) {
    prod = book;
  }
};

const deleteBook = (state, id) => {
  const index = state.all.findIndex(book => book.id === id);
  state.all.splice(index, 1);
};

const decrementBookInventory = (state, { id }) => {
  const book = state.all.find(b => b.id === id);
  book.inventory--;
};

const pushBook = (state, book) => {
  state.all.push(book);
};

export default {
  setBooks,
  setSelectedBook,
  updateBook,
  deleteBook,
  decrementBookInventory,
  pushBook
};
