import React from 'react';
import { connect } from 'react-redux';

import {
  HeaderWrapper, Logo,
  Nav, NavItem, NavSearch,
  Addition, Button, SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoItemWrapper
} from './style';

import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

const getSearchInfo = (show) => {
  if (!show) return null
  return (
    <SearchInfo>
    <SearchInfoTitle>
      热门搜索
      <SearchInfoSwitch>换一批</SearchInfoSwitch>
    </SearchInfoTitle>

    <SearchInfoItemWrapper>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
      <SearchInfoItem>教育</SearchInfoItem>
    </SearchInfoItemWrapper>
  </SearchInfo>
  )
}

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch className={props.focused ? 'focused' : ''}
              onFocus={() => props.handleInputFocused(true)}
              onBlur={() => props.handleInputFocused(false)} />
          </CSSTransition>

          {getSearchInfo(props.focused)}
          <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe637;</i>
        </SearchWrapper>
        <Addition>
          <Button className='writing'>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused(focused) {
      dispatch(actionCreators.genInputFocusedAction(focused))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)