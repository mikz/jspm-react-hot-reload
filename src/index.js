import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import DevTools from './containers/dev_tools'
import Counter from './containers/counter'
import HelloWorld from './containers/hello_world'
import reducers from './reducers/index';

const store = window.__store || configureStore(reducers)
delete window.__store

export function __unload() {
  window.__store = store;
}

export function __reload(deletedModule) {
  store.replaceReducer(reducers)
}

ReactDOM.render((
  <Provider store={store}>
    <div>
      <HelloWorld />
      <Counter />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('app'))
