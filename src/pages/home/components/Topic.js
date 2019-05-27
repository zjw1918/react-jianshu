import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Topic extends PureComponent {
  componentDidMount() {
    this.props.handleFetchTopicList()
  }

  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map(item => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-pic' alt='' src={item.get('imgUrl')} />
                {item.get('title')}
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
const mapDispatch = (dispatch) => {
  return {
    handleFetchTopicList() {
      dispatch(actionCreators.fetchTopicList())
    }
  }
}

export default connect(mapState, mapDispatch)(Topic)
