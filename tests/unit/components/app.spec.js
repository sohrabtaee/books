import sinon from 'sinon';
import { shallowMount } from '@vue/test-utils';
import { storeSetup, localVue } from '../helpers';

import App from '@/App.vue';

let store, actions;

beforeEach(() => {
  actions = {
    getBooks: sinon.stub(),
    getCategories: sinon.stub()
  };
  store = storeSetup({}, {}, actions);
});

describe('App', () => {
  it('should get books and categories when mounted', () => {
    shallowMount(App, {
      store,
      localVue
    });
    sinon.assert.calledOnce(actions.getBooks);
  });
});
