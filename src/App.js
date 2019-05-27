import React, { Component } from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home';
import Detail from './pages/detail';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home} />
          <Route path='/detail' exact component={Detail} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App