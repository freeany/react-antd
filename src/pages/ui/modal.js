import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

export default class modal extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    loading: false
  }

  // 点击按钮打开模态框
  handleOpen = type => {
    this.setState({
      [type]: true
    })
  }

  // 模态框按钮点击ok
  handleOk = e => {
    console.log(e)
  }

  // 展示确认框
  handleConfirm = (type) => {
    Modal[type]({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {}
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>
            Warning
          </Button>
        </Card>
        {/* open 模态框 */}
        <Modal
          title="基础模态框 open"
          visible={this.state.showModal1}
          onOk={this.handleOk}
          onCancel={() =>
            this.setState({
              showModal1: false
            })
          }
        ></Modal>
        {/* 基础模态框 自定义页脚 */}
        <Modal
          title="基础模态框 自定义页脚"
          visible={this.state.showModal2}
          footer={[
            <Button
              key="back"
              onClick={() =>
                this.setState({
                  showModal2: false
                })
              }
            >
              取消
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.state.false}
              onClick={this.handleOk}
            >
              确定
            </Button>
          ]}
        ></Modal>
        {/* 基础模态框  距离顶部20px */}
        <Modal
          title="基础模态框 距离顶部20px"
          visible={this.state.showModal3}
          style={{ top: 20 }}
          cancelText="取消"
          okText="确定"
          onCancel={() =>
            this.setState({
              showModal3: false
            })
          }
        ></Modal>
        {/* 基础模态框  垂直居中*/}
        <Modal
          title="基础模态框 垂直居中"
          visible={this.state.showModal4}
          centered={true}
          cancelText="取消"
          okText="确定"
          onCancel={() =>
            this.setState({
              showModal4: false
            })
          }
        ></Modal>
      </div>
    )
  }
}


// centered