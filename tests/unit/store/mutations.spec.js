import { expect } from 'chai';
import mutations from '@/store/mutations';

const { setUser } = mutations;

describe('mutations', () => {
  it('should set user', () => {
    // mock state
    const state = {
      userId: null,
      accessType: null
    };
    // apply mutation
    setUser(state, {
      user_id: 'id',
      access_type: 'free'
    });
    // assert result
    expect(state.userId).to.equal('id');
    expect(state.accessType).to.equal('free');
  });
});
