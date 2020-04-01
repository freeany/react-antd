import React, { Component } from 'react'
import { Card, Button, Icon } from 'antd'
import './button.less'
const ButtonGroup = Button.Group

export default class button extends Component {
  state = {
    loading: false,
    iconLoading: false
  }
  enterLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  enterIconLoading = () => {
    this.setState({
      iconLoading: !this.state.iconLoading
    })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">主要按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">危险按钮</Button>
          <Button type="link">超链接按钮</Button>
        </Card>

        <Card title="图形按钮">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </Card>

        <Card title="loading按钮">
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon="poweroff"
            loading={this.state.iconLoading}
            onClick={this.enterIconLoading}
          >
            Click me!
          </Button>
          <Button type="primary" loading />
          {/* <Button type="primary" shape="circle" loading />
          <Button type="danger" shape="round" loading /> */}
        </Card>

        <Card title="按钮组">
          <ButtonGroup >
            <Button type="danger">Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" size="small" icon="cloud" />
            <Button type="primary" size="small" icon="cloud-download" />
          </ButtonGroup>
        </Card>
      </div>
    )
  }
}
