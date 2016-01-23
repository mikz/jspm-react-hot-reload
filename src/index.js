
import React from 'react'
import ReactDOM from 'react-dom'


class HelloWorld extends React.Component {

  render() {
    return (<p>Hello World! Yay!</p>)
  }
}

ReactDOM.render((
  <HelloWorld/>
), document.getElementById('app'))
