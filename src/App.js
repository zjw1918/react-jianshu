import React, { Component } from 'react'
import Header from './common/header'
import GoTop from './common/go-top'

import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'

import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import write from './pages/write'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' exact component={Detail} />
          <Route path='/login' exact component={Login} />
          <Route path='/write' exact component={write} />
        </BrowserRouter>
        <GoTop />
      </Provider>
    )
  }
}

export default App