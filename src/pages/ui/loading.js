import React, { Component } from 'react'
import { Card, Spin, Alert, Icon } from 'antd'
import './ui.less'
export default class loading extends Component {
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
        return (
          <div>
            <Card title="spin基本演示" className="card-wrap">
              <Spin></Spin>
              {/* 使用size指定 spin的尺寸 */}
              <Spin size="large"></Spin>
              <Spin size="small"></Spin>
            </Card>

            <Card
              title="将spin放到一个容器上, 用于数据加载成功前的loading，一般用于表格"
              className="card-wrap"
            >
              <Spin
                style={{ width: '400px' }}
                tip="加载中ing..."
                indicator={antIcon}
              >
                <Alert
                  style={{ width: '400px' }}
                  message="React"
                  description="欢迎来到React高级实战课程"
                  type="success"
                />
              </Spin>
            </Card>
          </div>
        )
    }
}
