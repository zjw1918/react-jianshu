import React, { Component } from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

import store from './store'

const BtnGoTop = styled.div`
position: fixed;
right: 40px;
bottom: 40px;
width: 50px;
height: 50px;
line-height: 50px;
text-align: center;
cursor: pointer;
border: 1px solid #dcdcdc;

i {
  font-size: 20px;
}
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.handleScrollChange = this.handleScrollChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollChange)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollChange)
  }

  handleScrollChange() {
    if (window.document.documentElement.scrollTop < 400) {
      this.setState({show: false})
    } else {
      this.setState({show: true})
    }
  }

  handleGoTop() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' exact component={Detail} />
          <Route path='/login' exact component={Login} />
        </BrowserRouter>
        {
          this.state.show ? (
            <BtnGoTop onClick={this.handleGoTop}>
              <i className='iconfont'>&#xe607;</i>
            </BtnGoTop>
            ) : null
        }
      </Provider>
    )
  }
}

export default App