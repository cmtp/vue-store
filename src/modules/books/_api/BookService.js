import Api from '../../../api/api';

const API = Api();
export default {
  getBooks() {
    return API.get('/books');
  },

  getBook(id) {
    return API.get(`books/${id}`);
  },

  addNewBook(product) {
    return API.post('/books', product);
  },

  updateBook(id, product) {
    return API.put(`/books/${id}`, product);
  },

  deleteBook(id) {
    return API.delete(`/books/${id}`);
  }
};
