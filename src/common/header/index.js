import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
    const { focused, list, mouseIn, pageIndex, totalPage,
      handleMouseEnter, handleSwitch 
    } = this.props

    if (!focused && !mouseIn) return null
    let newList = list.toJS()
    newList = newList.slice(pageIndex * 10, (pageIndex + 1) * 10)

    return (
      <SearchInfo 
        onMouseLeave={() => handleMouseEnter(false)}
        onMouseEnter={() => handleMouseEnter(true)}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch
            onClick={() => handleSwitch(pageIndex, totalPage, this.icon)}>
            <i ref={(icon) => this.icon = icon} className='iconfont spin'>&#xe851;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>

        <SearchInfoItemWrapper>
          {
            newList.map((item) => {
              return (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })
          }
        </SearchInfoItemWrapper>
    </SearchInfo>
    )
  }

  render() {
    const { focused, list, handleInputBlur, handleInputFocus } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'><Logo href='/' /></Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <Link to='/login'>
            <NavItem className='right'>登录</NavItem>
          </Link>
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
                onFocus={() => handleInputFocus(list.size)}
                onBlur={handleInputBlur} />
            </CSSTransition>
  
            {this.getSearchInfo()}
            <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#xe637;</i>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    pageIndex: state.getIn(['header', 'pageIndex']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(size) {
      if (size === 0) dispatch(actionCreators.getHotItems())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(enter) {
      dispatch(actionCreators.mouseIn(enter))
    },
    handleSwitch(pageIndex, totalPage, icon) {
      let angle = icon.style.transform.replace(/[^0-9]/ig, '')
      if (angle) {
        angle = parseInt(angle)
      } else {
        angle = 0
      }
      
      icon.style.transform = 'rotate(' + (angle + 360) + 'deg)'
      dispatch(actionCreators.switchList(pageIndex < totalPage-1 ? pageIndex + 1 : 0))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)