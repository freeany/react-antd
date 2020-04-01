import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Topic2 from './Topic2'

export default class index extends Component {
  render() {
    const { match } = this.props
    console.log(match)
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic2} />
        <Route exact path={match.url} render={() => <h3>没有匹配到</h3>} />
      </div>
    )
  }
}
