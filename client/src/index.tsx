import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { initStore, BlogStore } from './store/store'
import registerServiceWorker from './registerServiceWorker';
import { blogSettingActions } from './store/actions'
import { metadataActions } from './store/actions'

import { listenForAuthStateChange } from './data/Auth'

import './css/variables.css'
import './css/reset.css'
import './css/small-default.css'
import './css/medium.css'
import './css/large.css'


initStore(store => {
  listenForAuthStateChange(store.dispatch)
  store.dispatch(blogSettingActions.loadBlogSettingsAction())
  store.dispatch(metadataActions.loadMetadataAction())
  
  render(store)
})

function render(store: BlogStore) {

  ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );  
}

registerServiceWorker();
