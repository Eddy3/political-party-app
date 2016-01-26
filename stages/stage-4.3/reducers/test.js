/* eslint-disable no-unused-expressions */

import {expect} from 'chai';

import votesReducer from './';

describe('votesReducer', () => {
  describe('#votesReducer()', () => {
    it('should increment party votes by 1', () => {
      const newState = votesReducer({PARTY_CODE: 25}, {type: 'VOTE', partyCode: 'PARTY_CODE'});

      expect(newState).to.deep.equal({PARTY_CODE: 26});
    });
  });
});
