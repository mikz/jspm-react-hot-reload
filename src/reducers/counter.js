export default function counter(state, action) {
  console.log("STATE", state, action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 2
    case 'DECREMENT':
      return state - 1
    default:
      return 0
  }
}
