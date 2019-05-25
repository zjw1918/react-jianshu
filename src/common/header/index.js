import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  HeaderWrapper, Logo,
  Nav, NavItem, NavSearch,
  Addition, Button, SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoItemWrapper
} from './style';

import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';


class Header extends Component {

  getSearchInfo() {
    const { focused, list } = this.props

    if (!focused) return null
    return (
      <SearchInfo>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch>换一批</SearchInfoSwitch>
      </SearchInfoTitle>
        {
          list.slice(0, 5).map(item => {
            return (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>
            )
          })
        }
      <SearchInfoItemWrapper>
      </SearchInfoItemWrapper>
    </SearchInfo>
    )
  }

  render() {
    const { focused, handleInputBlur, handleInputFocus } = this.props;
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} />
            </CSSTransition>
  
            {this.getSearchInfo()}
            <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe637;</i>
          </SearchWrapper>
          <Addition>
            <Button className='writing'>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getHotItems())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)