import React, { PureComponent } from "react"
import { GoTopWrapper } from './style'

class GoTop extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.handleScrollChange = this.handleScrollChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollChange)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollChange)
  }

  handleScrollChange() {
    if (window.document.documentElement.scrollTop < 200) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    }
  }

  handleGoTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        {
          this.state.show ? (
            <GoTopWrapper onClick={this.handleGoTop}>
              <i className='iconfont'>&#xe607;</i>
            </GoTopWrapper>
          ) : null
        }
      </div>
    )
  }
}

export default GoTop