import React from 'react'
import { decrement, increment } from '../redux/actions'

const PlusMinusFunction = () => {
  return (
    <article>
      <h2>Function Components</h2>
      <aside>
          <button onClick={()=>increment()}>-</button>
          <span>0</span>
          <button onClick={()=>decrement()}>+</button>
        </aside>
    </article>
  )
}

export default PlusMinusFunction