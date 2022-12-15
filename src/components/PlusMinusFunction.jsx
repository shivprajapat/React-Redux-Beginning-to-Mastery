import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions'

const PlusMinusFunction = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.changeCount);
console.log('count :>> ',data);
  return (
    <article>
      <h2>Function Components</h2>
      <aside>
        <button onClick={() => dispatch(decrement(1,data[0]-1))}>-</button>
        <span>{data[0]}</span>
        <button onClick={() => dispatch(increment(2,data[0]+1))}>+</button>
      </aside>
  <p>{data[1]}</p>
      </article>
  )
}

export default PlusMinusFunction