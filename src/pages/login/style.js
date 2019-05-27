import styled from 'styled-components'

export const LoginWrapper = styled.div`
background: #f1f1f1;
width: 100%;
min-height: 750px;
height: 100%;
text-align: center;
font-size: 14px;
// padding-top: 60px;
`
export const LoginMain = styled.div`
width: 400px;
margin: 50px auto 0;
padding: 50px 50px 30px;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 8px rgba(0,0,0,.1);
vertical-align: middle;
box-sizing: border-box;
display: inline-block;
`

export const Title = styled.div`
font-weight: 700;
color: #ea6f5a;
font-size: 18px;
margin-bottom: 40px;

span {
    width: 50px;
    border-bottom: 2px solid #ea6f5a;
}
`
export const InputArea = styled.div`
width: 300px;

.input-wrapper:first-child {
    border-radius: 4px 4px 0 0;
}
.input-wrapper:last-child {
    border-radius: 0 0 4px 4px;
}
`

export const InputWrapper = styled.div`
height: 50px;
line-height: 50px;
border: 1px solid #c8c8c8;
box-sizing: border-box;
margin: 0 0 -1px -1px;

background-color: hsla(0,0%,71%,.1);
padding: 0 10px;
i {
    color: #969696;
    font-size: 20px;
}

`

export const Input = styled.input`
height: 100%;
width: 90%;
outline: none;
border: none;
background: transparent;
font-size: 14px;
`

