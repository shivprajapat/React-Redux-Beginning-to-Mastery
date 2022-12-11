import React, { Component } from 'react'
import { decrement, increment } from '../redux/actions'

class PlusMinusClass extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'props data');
}
  render() {
    return (
      <article>
        <h2>Class Component</h2>
        <aside>
          <button onClick={() => this.props.decrement(1)}>-</button>
          <span>0</span>
          <button onClick={() => this.props.increment(5)}>+</button>
        </aside>
      </article>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      count: state.changeCount
  }
}

const mapDispatchToProps = (dispatch => {
  return {
      increment: (num) => dispatch(increment(num)),
      decrement: (num) => dispatch(decrement(num))
  }
})

export default PlusMinusClass;
