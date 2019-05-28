import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Write extends PureComponent {
    render() {
        const { isLogin } = this.props
        if (!isLogin) return <Redirect to='/login'/>
        return (
            <div>写作页面</div>
        )
    }
}

const mapState = (state) => {
    return {
        isLogin: state.getIn(['login', 'isLogin'])
    }
}

export default connect(mapState, null)(Write)