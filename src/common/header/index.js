import React, { Component } from 'react';
import { 
HeaderWrapper, Logo, 
Nav, NavItem, NavSearch,
Addition, Button, SearchWrapper,
} from './style';

import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }

    this.handleInputFocused = this.handleInputFocused.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch className={this.state.focused ? 'focused' : ''}
                onFocus={() => this.handleInputFocused(true)}
                onBlur={() => this.handleInputFocused(false)}/>
            </CSSTransition>
            <i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe637;</i>
          </SearchWrapper>
          <Addition>
            <Button className='writing'>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }

  handleInputFocused(focused) {
    this.setState(() => this.state = {focused})
  }
}

export default Header