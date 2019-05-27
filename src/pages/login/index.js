import React, { PureComponent } from 'react'
import { LoginWrapper, LoginMain, Title, InputArea, InputWrapper, Input } from './style';

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginMain>
          <Title>
            <span>登录</span>
          </Title>

          <InputArea>
            <InputWrapper className='input-wrapper'>
              <i className='iconfont'>&#xe604;</i> 
              <Input placeholder='手机号或邮箱' />
            </InputWrapper>
            <InputWrapper className='input-wrapper'>
              <i className='iconfont'>&#xe620;</i> 
              <Input placeholder='密码'/>
            </InputWrapper>
          </InputArea>
        </LoginMain>
      </LoginWrapper>
    )
  }
}

export default Login
