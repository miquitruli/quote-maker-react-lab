export default (state = [], action) => {
  let idx
  switch (action.type) {
    case "ADD_QUOTE":
      if (!action.quote) {
        console.log("Action ADD_QUOTE attempted with invalid quote", action.quote)
        return state;
      }
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      idx = state.findIndex(x => {
        return x.id === action.quoteId
      })
      if (idx > -1) {
        console.log(`Element to remove is index ${idx} with id ${action.quoteId}`)
        return [...state.slice(0, idx), ...state.slice(idx + 1)]
      } else {
      console.log(`REMOVE_QUOTE id ${action.quoteId} not found`)
      return state;
      }
    case "UPVOTE_QUOTE":
      idx = state.findIndex(x => {
        return x.id === action.quoteId
      })
      if (idx > -1) {
        console.log(`Element to upvote is index ${idx} with id ${action.quoteId}`)
        let upQuote = Object.assign({}, state[idx], { votes: state[idx].votes + 1 })
        return [...state.slice(0, idx), upQuote, ...state.slice(idx + 1)]
      } else {
      console.log(`UPVOTE_QUOTE id ${action.quoteId} not found`)
      return state;
      }
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(x => {
        return x.id === action.quoteId
      })
      if (idx > -1) {
        console.log(`Element to downvote is index ${idx} with id ${action.quoteId}`)
        let downQuote = Object.assign({}, state[idx], { votes: state[idx].votes - 1 });
        if (downQuote.votes < 0 ) downQuote.votes = 0;
        return [...state.slice(0, idx), downQuote, ...state.slice(idx + 1)]
      } else {
      console.log(`DOWNVOTE_QUOTE id ${action.quoteId} not found`)
      return state;
      }
    default:
      return state;

  }
}