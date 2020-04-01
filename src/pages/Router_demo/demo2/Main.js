import React, { Component } from 'react'
import { Link} from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      <div>
        <Link to="/main/a" >main_a组件</Link>
        <hr/>
        <div>hhhhhh    我是main。。。。。</div>
        {this.props.children}
      </div>
    )
  }
}
