import React, { PureComponent } from "react"
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  ItemWrapper,
  Title,
  Desc,
  ItemLeft
} from '../style'
import { actionCreators } from "../store";

class List extends PureComponent {
  componentDidMount() {
    this.props.handleFetchList()
  }

  render() {
    const { list } = this.props

    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ItemWrapper key={index}>
                <ItemLeft>
                  <Link to={'/detail/' + index}>
                    <Title>{item.get('title')}</Title>
                  </Link>
                  <Desc>{item.get('desc')}</Desc>
                </ItemLeft>

                <img alt='' src={item.get('imgUrl')} />
              </ItemWrapper>
            )
          })
        }

      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list']),
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleFetchList() {
      dispatch(actionCreators.fetchList())
    }
  }
}

export default connect(mapState, mapDispatch)(List)
