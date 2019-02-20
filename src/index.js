import React from 'react';
import ReactDOM from 'react-dom';

import Main from './containers/main';
import {Provider} from 'react-redux'
import store from './store/configureStore'


ReactDOM.render(
      <Provider store={store()}>
        <Main />
      </Provider>, document.getElementById('root'));
