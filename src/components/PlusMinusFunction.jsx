import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/actions'

const PlusMinusFunction = () => {
  const dispatch = useDispatch()
  return (
    <article>
      <h2>Function Components</h2>
      <aside>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>0</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </aside>
    </article>
  )
}

export default PlusMinusFunction