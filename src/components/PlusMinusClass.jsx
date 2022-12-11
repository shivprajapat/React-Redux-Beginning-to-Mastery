import React, { Component } from 'react'
import { decrement, increment } from '../redux/actions'

class PlusMinusClass extends Component {

  render() {
    return (
      <article>
        <h2>Class Component</h2>
        <aside>
          <button onClick={() => decrement()}>-</button>
          <span>0</span>
          <button onClick={() => increment()}>+</button>
        </aside>
      </article>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (num) => dispatch(increment(num)),
    decrement: (num) => dispatch(decrement(num)),
  }
}
export default PlusMinusClass