import BooksService from '../_api/BookService';
import BookService from '../_api/BookService';

const getBooks = async ({ commit }) => {
  let response = await BooksService.getBooks();
  commit('setBooks', response.data);
};

const getBook = async ({ commit }, id) => {
  let response = await BookService.getBook(id);
  commit('setSelectedBook', response.data);
};

const addBook = async ({ commit }, Book) => {
  let response = await BooksService.addNewBook(Book);
  commit('pushBook', response.data);
};

const updateBook = async ({ commit }, id, Book) => {
  let response = await BooksService.updateBook(id, Book);
  commit('updateBook', response.data);
};

const deleteBook = async ({ commit }, id) => {
  let response = await BooksService.deleteBook(id);
  commit('deleteBook', response.data);
};

export default {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook
};
