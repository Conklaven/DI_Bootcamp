import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCount,decreaseCount } from '../actions/Counter'

class Counter extends Component {

static mapStateToProps = state => {
    return {
        count: state.count
    }
}

static mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increaseCount,
        decreaseCount
    },
    dispatch
    )
}

render() {
    const { increaseCount, decreaseCount } = this.props

    return(
        <div className="counter">
        <button className="btn" onClick={increaseCount} >+</button>
        <span className="count">{this.props.count}</span>
        <button onClick={decreaseCount}>-</button>
        </div>
    )
}

}

export default connect(
    Counter.mapStateToProps,
    Counter.mapDispatchToProps
)(Counter)