import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions'

const PlusMinusFunction = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.changeCount);
console.log('count :>> ', count);
  return (
    <article>
      <h2>Function Components</h2>
      <aside>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment(3))}>+</button>
      </aside>
    </article>
  )
}

export default PlusMinusFunction