import { combineReducers } from 'redux'

import all, * as fromAll from './all'
import byId, * as fromById from './byId'

// REDUCER

const projects = combineReducers({
  all,
  byId
})

// EXPORT SELECTORS

export function getById(state, id) {
  return fromById.getById(state, id)
}

export function getAll(state) {
  return fromAll
    .getAll(state.all)
    .map(id => getById(state, id))
}

// EXPORT REDUCER

export default projects
