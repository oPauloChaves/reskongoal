const defaultState = {}

// REDUCER

function byId(state = defaultState, acton) {
  if (action.type === 'FETCHED_POST') {
    return Object.assign({}, state, { [action.payload.id]: acton.payload })
  }

  return state
}

// SELECTOR

function getById(state, id) {
  return state[id]
}

export default byId
