import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper, Title, Content, Spacer
} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Detail extends PureComponent {
  componentDidMount() {
    console.log(this.props.match.params);
    
    const { id } = this.props.match.params
    this.props.handleFetchDetail(id)
  }

  render() {
    const { data } = this.props
    
    return (
      <DetailWrapper>
        <Title>
          {data.get('title')}
        </Title>
        <Spacer />
        <Content dangerouslySetInnerHTML={{__html: data.get('content')}} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    data: state.getIn(['detail', 'data'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleFetchDetail(id) {
      dispatch(actionCreators.fetchDetail(id))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))
