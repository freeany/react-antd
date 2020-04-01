import React, { Component } from 'react'

export default class index extends Component {
  pushAbout = () => {
    console.log(this.props)
    this.props.history.push(
     {
       pathname: '/about',
       query: {
         name: 'zss'
       }
     }
    )
  }
  render() {
    return (
      <div>
        <p>Home组件</p>
        <button onClick={this.pushAbout}>点击带参跳转到About</button>
      </div>
    )
  }
}
