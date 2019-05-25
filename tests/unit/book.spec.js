import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { books, storeSetup, localVue } from './helpers';
import Book from '@/views/Book.vue';

let store, state;

beforeEach(() => {
  state = {
    loading: {
      books: false
    },
    books: books,
    accessType: 'free'
  };
  store = storeSetup(state);
});

describe('Book', () => {
  it('should show the proper book based on book id passed in the url', () => {
    const $route = {
      params: {
        bookId: '5c5ae9fc608b273a52570423'
      }
    };
    const wrapper = shallowMount(Book, {
      store,
      localVue,
      mocks: {
        $route
      }
    });
    expect(wrapper.text()).to.include('Adultus annus socius coma');
  });

  it('should show a message to the user when the book was not found', () => {
    const $route = {
      params: {
        bookId: 'foo'
      }
    };
    const wrapper = shallowMount(Book, {
      store,
      localVue,
      mocks: {
        $route
      }
    });
    expect(wrapper.text()).to.include('Book not found.');
  });

  it('should show half of the content of the book to the users with free account', () => {
    const $route = {
      params: {
        bookId: '5c5ae9fc608b273a52570423'
      }
    };
    const wrapper = shallowMount(Book, {
      store,
      localVue,
      mocks: {
        $route
      }
    });
    const book = store.state.books.find(
      book => book.id === $route.params.bookId
    );
    const contentLength = book.content.length;
    const renderedContent = wrapper.find('p').text();
    expect(renderedContent.length).to.be.eq(contentLength * 2);
  });
});
