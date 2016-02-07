export function vote(partyCode) {
  return {
    type: 'VOTE',
    partyCode,
  };
}
