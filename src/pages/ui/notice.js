import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

export default class Notice extends Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction,
        duration: 1.2
      })
    }
    notification[type]({
      message: '发工资了',
      description: '奖金2000000，哈哈哈哈哈哈哈哈哈哈'
    })
  }
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification('success')}
          >
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('warning')}
          >
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>
            Error
          </Button>
        </Card>
        <Card title="通知提醒框 位置不同" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification('success', 'topLeft')}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('info', 'topRight')}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('warning', 'bottomLeft')}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('error', 'bottomRight')}
          >
            Error
          </Button>
        </Card>
      </div>
    )
  }
}
