import { combineReducers } from 'redux'

import projects, * as fromProjects from './projects'

// REDUCER

const rootReducer = combineReducers({
  projects
})

// EXPORT SELECTORS

export function getProjectById(state, id) {
  return fromProjects.getById(state, id)
}

// EXPORT ROOT REDUCER

export default rootReducer
