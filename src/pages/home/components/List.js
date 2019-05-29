import React, { PureComponent } from "react"
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  ItemWrapper,
  Title,
  Desc,
  ItemInfo,
  LoadMore
} from '../style'
import { actionCreators } from "../store";

class List extends PureComponent {
  componentDidMount() {
    this.props.handleFetchList()
  }

  render() {
    const { list, page, handleLoadMore } = this.props

    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ItemWrapper key={index}>
                <ItemInfo>
                  <Link to={'/detail/' + index}>
                    <Title>{item.get('title')}</Title>
                  </Link>
                  <Desc>{item.get('desc')}</Desc>
                </ItemInfo>

                <img alt='' src={item.get('imgUrl')} />
              </ItemWrapper>
            )
          })
        }
        <LoadMore onClick={() => handleLoadMore(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list']),
    page: state.getIn(['home', 'page']),
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleFetchList() {
      dispatch(actionCreators.fetchList())
    },
    handleLoadMore(page) {
      dispatch(actionCreators.loadMore(page))
    },
  }
}

export default connect(mapState, mapDispatch)(List)
