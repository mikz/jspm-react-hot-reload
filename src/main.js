import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import DevTools from './containers/dev_tools'
import Counter from './containers/counter'
import HelloWorld from './containers/hello_world'
import reducers from './reducers/index';

export let store = configureStore(reducers)

export function __reload(deletedModule) {
  store = deletedModule.store
  store.replaceReducer(reducers)
}

export function render(element) {
  ReactDOM.render((
    <Provider store={store}>
      <div>
        <HelloWorld />
        <Counter />
        <DevTools />
      </div>
    </Provider>
  ), element)
}
