import React, { PureComponent } from 'react'
import { LoginWrapper, LoginMain, Title, InputArea, InputWrapper, Input, LoginBtn } from './style'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { actionCreators } from './store';

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props
    if (isLogin) return (<Redirect to='/'/>)
    return (
      <LoginWrapper>
        <LoginMain>
          <Title>
            <span>登录</span>
          </Title>

          <InputArea>
            <InputWrapper className='input-wrapper'>
              <i className='iconfont'>&#xe604;</i> 
              <Input placeholder='手机号或邮箱' ref={(input) => this.account = input}/>
            </InputWrapper>
            <InputWrapper className='input-wrapper'>
              <i className='iconfont'>&#xe620;</i> 
              <Input placeholder='密码' type='password' ref={(input) => this.password = input}/>
            </InputWrapper>
          </InputArea>

          <LoginBtn onClick={() => this.props.handleLogin(this.account, this.password)}>登录</LoginBtn>
        </LoginMain>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleLogin(accountElem, passwordElem) {      
      dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
