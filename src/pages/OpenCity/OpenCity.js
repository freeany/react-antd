import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Select, Table, Modal } from 'antd'
import axios from '../../axios'
import '../../mock/api'
import Utils from '../../utils/utils'
const FormItem = Form.Item
const Option = Select.Option

class FormCity extends Component {
  searchCity = () => {
    const { getFieldsValue } = this.props.form
    console.log(getFieldsValue())
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form layout="inline">
          <FormItem label="城市">
            {getFieldDecorator('city_id')(
              <Select style={{ width: '100px' }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">上海市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="用车模式">
            {getFieldDecorator('mode')(
              <Select style={{ width: '140px' }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="营运模式">
            {getFieldDecorator('op_mode')(
              <Select style={{ width: '80px' }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="加盟商授权状态">
            {getFieldDecorator('auth_status')(
              <Select style={{ width: '100px' }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              style={{ margin: '0 20px' }}
              onClick={this.searchCity}
            >
              查询
            </Button>
            <Button>重置</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

class TableCity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      pagination: {}
    }
    this.params = {
      page: 1
    }
  }
  componentDidMount() {
    this.queryData()
  }

  queryData() {
    axios
      .ajax({
        url: '/city/open_city'
        // data: {
        //   params: {
        //     page: this.params.page
        //   }
        // }
      })
      .then(data => {
        console.log(data)
        const finalData = data.result.item_list.map(item => {
          item.key = item.id
          return item
        })
        this.setState({
          dataSource: finalData,
          pagination: Utils.pagination(data.result, this.handlePagination)
        })
      })
  }

  // 点击分页时的回调
  handlePagination = e => {
    console.log(e)
  }

  render() {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      },
      {
        title: '城市名称',
        dataIndex: 'name'
      },
      {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode) {
          return mode == 1 ? '停车点' : '禁停区'
        }
      },
      {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode == 1 ? '自营' : '加盟'
        }
      },
      {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      },
      {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render: (text, item) => {
          return text.map(item => item.user_name).join(',')
        }
      },
      {
        title: '城市开通时间',
        dataIndex: 'open_time'
      },
      {
        title: '操作时间',
        dataIndex: 'update_time',
        render: text => {
          return Utils.formateDate(text)
        }
        // render: Utils.formateDate
      },
      {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ]
    return (
      <div>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          pagination={this.state.pagination}
        />
      </div>
    )
  }
}

class OpenCityModal extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    }
    const { getFieldDecorator } = this.props.form
    return (
      <Form>
        <FormItem label="选择城市" {...formItemLayout}>
          {getFieldDecorator('city_id', {
            initialValue: '1'
          })(
            <Select style={{width: '180px'}}>
              <Option value="1">北京</Option>
              <Option value="2">上海</Option>
              <Option value="3">深圳</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
          {getFieldDecorator('op_mode', {
            initialValue: '1'
          })(
            <Select style={{width: '180px'}}>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {getFieldDecorator('use_mode', {
            initialValue: '1'
          })(
            <Select style={{width: '180px'}}>
              <Option value="1">指定停车点</Option>
              <Option value="2">禁停区</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    )
  }
}
export default class OpenCity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  // 点击开通城市的函数
  handleOpenCity = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = item => {
    // 获取开通城市的数据，进行发送请求
    console.log(this.cityForm.props.form.getFieldsValue()) // 获取数据
    // 发送请求。。。。。代码。。。。

    // 发送成功，隐藏modal
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        <Card title="查询城市列表" style={{ marginBottom: '10px' }}>
          <FormCity></FormCity>
        </Card>
        <Card>
          <Button
            type="primary"
            style={{ marginBottom: '10px' }}
            onClick={this.handleOpenCity}
          >
            开通城市
          </Button>
          <TableCity></TableCity>
        </Card>
        <Modal
          title="开通城市"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
        >
          <OpenCityModal
            wrappedComponentRef={inst => {
              this.cityForm = inst
            }}
          />
        </Modal>
      </div>
    )
  }
}

FormCity = Form.create({})(FormCity)
OpenCityModal = Form.create({})(OpenCityModal)
