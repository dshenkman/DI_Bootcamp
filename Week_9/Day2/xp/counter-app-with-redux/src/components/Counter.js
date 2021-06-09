import React from 'react'
import {connect} from 'react-redux'

import {increase, decrease} from '../actions/index'

class Counter extends React.Component {

  render() {
  return (
    <div>
      <button onClick= {this.props.increase}>+</button>
      <span>{this.props.count}</span>
      <button onClick={this.props.decrease}>-</button>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count

  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
