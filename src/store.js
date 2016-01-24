import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from './containers/dev_tools';

const finalCreateStore = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
)(createStore);

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const initial = { counter: 0 }

export default function configureStore(reducers, initialState = initial) {
  const store = window.__store || finalCreateStore(reducers, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  //if (module.hot) {
  //  module.hot.accept('../reducers', () =>
  //    store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //  );
  //}

  window.__store = store
  return store;
}
