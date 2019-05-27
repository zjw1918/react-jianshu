import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map(item => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-pic' alt='' src={item.get('imgUrl')} />
                {item.get('topic')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}


const mapState = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}

export default connect(mapState, null)(Topic)
