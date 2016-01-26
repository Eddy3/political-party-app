import parties from '../parties';

const initialVotes = {};

parties.forEach((party) => initialVotes[party.code] = 0);

export default function votes(state = initialVotes, action) {
  const {type, partyCode} = action;

  switch (type) {
    case 'VOTE':
      return {
        ...state,
        [partyCode]: state[partyCode] + 1
      };
    default:
      return state;
  }
}
