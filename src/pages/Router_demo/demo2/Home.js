import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>header组件</header>
          <ul>
            <li>
              <Link to="/main">main</Link>
            </li>
            <li>
              <Link to="/topic">topic</Link>
            </li>
          </ul>
          {this.props.children}
          <footer>footer组件</footer>
        </div>
      </Router>
    )
  }
}
