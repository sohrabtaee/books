import axios from 'axios';
import router from '../router';

// set the base url for axios
axios.defaults.baseURL = 'https://ancient-springs-73658.herokuapp.com';

// helper function for ajax fails
function onError(error, commit, type) {
  console.error(error);
  commit('setLoading', {
    type: type,
    value: false
  });
}

export default {
  login({ commit }) {
    commit('setLoading', {
      type: 'user',
      value: true
    });
    axios
      .post('/auth')
      .then(() => {
        axios
          .get('/me')
          .then(response => {
            commit('setUser', response.data);
            commit('setLoading', {
              type: 'user',
              value: false
            });
            // save user info in local storage
            localStorage.setItem('booksUser', JSON.stringify(response.data));
            // navigate to home page
            router.push('/');
          })
          .catch(error => onError(error, commit, 'user'));
      })
      .catch(error => onError(error, commit, 'user'));
  },
  logout({ commit }) {
    // remove user from local storage
    localStorage.removeItem('booksUser');
    commit('removeUser');
    // navigate to login page
    router.push('/login');
  },
  // find user from local storage
  findUser({ commit }) {
    if (localStorage.getItem('booksUser')) {
      commit('setUser', JSON.parse(localStorage.getItem('booksUser')));
    }
  },
  getCategories({ commit }) {
    commit('setLoading', {
      type: 'categories',
      value: true
    });
    axios
      .get('/categories')
      .then(response => {
        commit('setCategories', response.data.categories);
        commit('setLoading', {
          type: 'categories',
          value: false
        });
      })
      .catch(error => onError(error, commit, 'categories'));
  },
  getBooks({ commit }) {
    commit('setLoading', {
      type: 'books',
      value: true
    });
    axios
      .get('/books')
      .then(response => {
        commit('setBooks', response.data.books);
        commit('setLoading', {
          type: 'books',
          value: false
        });
      })
      .catch(error => onError(error, commit, 'books'));
  }
};
