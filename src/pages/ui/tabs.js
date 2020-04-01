import React, { Component } from 'react'
import { Card, Button, Tabs, Icon } from 'antd'
import './ui.less'

const { TabPane } = Tabs
export default class Notice extends Component {
  constructor(props) {
    super(props)
    this.newTabIndex = 0
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false
      }
    ]
    this.state = {
      activeKey: panes[0].key,
      panes
    }
  }

  // 选择不同页签时的回调
  callback(key) {
    console.log(key)
  }

  // 新增/删除页签
  onChange = key => {
    this.setState({
      activeKey: key
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const { panes } = this.state
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: activeKey
    })
    this.setState({ panes, activeKey })
  }

  remove = targetKey => {
    let { activeKey } = this.state
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key
      } else {
        activeKey = panes[0].key
      }
    }
    this.setState({ panes, activeKey })
  }
  render() {
    return (
      <div>
        <Card title="基础tabs页签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab01" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab02" disabled key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab03" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>

        <Card title="带图标的tabs页签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  Tab01
                </span>
              }
              key="1"
            >
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab02" disabled key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab03" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>

        <Card title="新增/删除tabs页签">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </div>
    )
  }
}
