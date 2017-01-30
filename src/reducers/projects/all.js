const defaultState = []

// REDUCERS

function all(state = defaultState, action) {
  if (action.type === 'FETCHED_PROJECT') {
    const project = action.payload
    return state.find(id => project.id === id)
      ? state
      : [...state, action.payload.id]
  }

  return state
}

// SELECTORS

export function getAll(state) {
  return state
}

export default all
