import { sharedDataAccessAuth } from './shared-data-access-auth';

describe('sharedDataAccessAuth', () => {
  it('should work', () => {
    expect(sharedDataAccessAuth()).toEqual('shared-data-access-auth');
  });
});
