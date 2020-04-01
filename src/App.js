import React from 'react';
import './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Other from './pages/Other'
import Admin from './admin';
import Home from './pages/Home'
import Button from './pages/ui/button'
import Modal from './pages/ui/modal'
import Loading from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
// 表单
import FormLogin from './pages/Form/login'
import FormRegister from './pages/Form/register'
// 表格
import BasicTable from './pages/Table/basicTable'
import HighTable from './pages/Table/highTable'

// 城市管理
import OpenCity from './pages/OpenCity/OpenCity'
// 订单管理
import Order from './pages/Order/Order'
// import Router from './pages/Router_demo/demo2'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <div className="App">
      {/* <Route path="/"  render={() => <Redirect to="/admin"></Redirect>}></Route> */}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/other" component={Other}></Route>
        <Route
          path="/"
          render={() => {
            return (
              <Admin>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/home"></Redirect>}
                  ></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/ui/buttons" component={Button}></Route>
                  <Route path="/ui/modals" component={Modal}></Route>
                  <Route path="/ui/loading" component={Loading}></Route>
                  <Route path="/ui/notification" component={Notice}></Route>
                  <Route path="/ui/messages" component={Message}></Route>
                  <Route path="/ui/tabs" component={Tabs}></Route>
                  <Route path="/ui/gallery" component={Gallery}></Route>
                  <Route path="/ui/carousel" component={Carousel}></Route>
                  <Route path="/form/login" component={FormLogin}></Route>
                  <Route path="/form/reg" component={FormRegister}></Route>
                  <Route path="/table/basic" component={BasicTable}></Route>
                  <Route path="/table/high" component={HighTable}></Route>
                  <Route path="/city" component={OpenCity}></Route>
                  <Route path="/order" component={Order}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            )
          }}
        ></Route>

      </Switch>
      {/* <Admin /> */}
      {/* <Router></Router> */}
    </div>
  )
}

export default App;
