// See https://github.com/ctrlplusb/react-universally
// See https://github.com/gaearon/redux-thunk
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

function configStore(inicialState) {
  if (inicialState) {
    const store = createStore(reducer, inicialState, applyMiddleware(thunk))
  } else {
    const store = createStore(reducer, applyMiddleware(thunk))
  }

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // enable webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configStore
