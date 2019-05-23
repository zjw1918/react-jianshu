import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import { GlobalIconFont } from './statics/iconfont/iconfont'

import * as serviceWorker from './serviceWorker';

const Hub = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconFont />
      <App />
    </Fragment>
  )
}

render(<Hub />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
