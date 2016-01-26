/* eslint-disable no-unused-expressions */

import {expect} from 'chai';

import * as votingActions from './';

describe('votingActions', () => {
  describe('#vote()', () => {
    it('should create vote action', () => {
      const voteAction = votingActions.vote('PARTY_CODE');

      expect(voteAction).to.deep.equal({type: 'VOTE', partyCode: 'PARTY_CODE'});
    });
  });
});
