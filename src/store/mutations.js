export default {
  setUser(state, user) {
    state.userId = user.user_id;
    state.accessType = user.access_type;
  },
  removeUser(state) {
    state.userId = null;
    state.accessType = null;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setBooks(state, books) {
    state.books = books;
  },
  setLoading(state, payload) {
    state.loading[payload.type] = payload.value;
  }
};
