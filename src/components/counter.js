import React from 'react'

export default function Counter(props) {
  return (
    <button onClick={props.onIncrement}>
     Current Value: {props.value}
    </button>
  )
}
