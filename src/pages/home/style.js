import styled from "styled-components";

export const HomeWrapper = styled.div`
width: 960px;
margin: 0 auto;
`
export const HomeLeft = styled.div`
float: left;
width: 625px;
margin-left: 15px;
padding-top:30px;

.banner-image {
  width: 625px;
  height: 270px;
}
`
export const HomeRight = styled.div`
width: 240px;
float: right;
`

export const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
overflow: hidden;
margin-left: -18px;
border-bottom: 1px solid #f0f0f0;
`

export const TopicItem = styled.div`
float: left;
height: 32px;
line-height: 32px;
padding-right: 10px;
margin-left: 18px;
margin-bottom: 18px;
background: #f7f7f7;
font-size: 14px;
color: #000;
border: 1px solid #dcdcdc;
border-radius: 4px;

.topic-pic {
  width: 32px;
  height: 32px;
  display: block;
  float: left;
  margin-right: 10px;
}
`

export const ItemWrapper = styled.div`
overflow: hidden;
margin: 0 0 15px;
padding: 15px 2px 20px 0;
border-bottom: 1px solid #f0f0f0;

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  float: right;
  width: 150px;
  height: 100px;
}
`
export const ItemInfo = styled.div`
width: 458px;
float: left;
`
export const Title = styled.span`
font-size: 18px;
line-height: 1.5;
color: #333;
font-weight:bold;
`

export const Desc = styled.div`
color: #999;
line-height: 24px;
font-size: 13px;
margin: 0 0 8px;
`

export const LoadMore = styled.div`
width: 100%,
height: 40px;
line-height: 40px;
text-align: center;
color: #fff;
border-radius: 20px;
background-color: #a5a5a5;
margin: 20px 0;
cursor: pointer;

:hover {
  background-color: #9b9b9b;
}
`
