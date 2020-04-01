import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu


class Index extends React.Component {
  componentDidMount() {
    //   console.dir(this.renderMenu(MenuConfig))
  }

  // 递归菜单
  renderMenu = MenuConfig => {
      return MenuConfig.map(item => {
          if(item.children) {
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {this.renderMenu(item.children)}
                </SubMenu>
              )
          } else {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.key}>{item.title}</Link>
                </Menu.Item>
              )
          }
      })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{ width: '100%' }}
        >
            {this.renderMenu(MenuConfig)}
         </Menu>
      </div>
    )
  }
}

export default Index
