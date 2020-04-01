import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Topic from './Topic'
import MainA from './main_a'

export default class index extends Component {
  render() {
    return (
      <Router>
        {/* 先显示home组件 */}
        <Home>
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route paht="/main/a" component={MainA}></Route>
              </Main>
            )}
          ></Route>
          <Route path="/topic" component={Topic}></Route>
        </Home>
      </Router>
    )
  }
}
