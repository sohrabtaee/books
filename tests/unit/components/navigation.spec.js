import { expect } from 'chai';
import sinon from 'sinon';
import { shallowMount } from '@vue/test-utils';
import { storeSetup, localVue } from '../helpers';

import Navigation from '@/components/Navigation.vue';

let store, state, actions;

beforeEach(() => {
  state = {
    userId: null
  };
  actions = {
    logout: sinon.stub()
  };
  store = storeSetup(state, {}, actions);
});

describe('Navigation', () => {
  it('should show logout button when user is logged in', () => {
    const wrapper = shallowMount(Navigation, {
      store,
      localVue
    });
    expect(wrapper.text()).to.not.include('Logout');
    state.userId = 'id';
    expect(wrapper.text()).to.include('Logout');
  });

  it('should call logout action when the user clicks on logout button', () => {
    state.userId = 'id';
    const wrapper = shallowMount(Navigation, {
      store,
      localVue
    });
    wrapper.find('button').trigger('click');
    sinon.assert.calledOnce(actions.logout);
  });
});
