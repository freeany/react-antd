import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import Admin from '../../admin'
import Home from './Home'
import About from './about'
import Topic from './Topic'
export default class index extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              {/* 
                link标签会去找Route标签，并且匹配Route标签的path属性
                也就是说link标签的to属性是与Route标签的path属性对应。
                但是前提条件是要先进入路由组件中，才能匹配到该路由组件中的子路由
                 */}
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topic">topic</Link>
            </li>
          </ul>
          
          <hr />
          <Admin>
            <Route
              path="/"
              render={() => <Redirect to="/home"></Redirect>}
            ></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
          </Admin>
        </div>
      </Router>
    )
  }
}
