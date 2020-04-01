import React from 'react'
import { Card, Table, Badge } from 'antd'
import axios from '../../axios'
import '../../mock/api'

export default class HighTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      sortOrder: 'ascend'
    }
  }
  componentDidMount() {
    this.queryData()
  }

  queryData = async () => {
    const result = await axios.ajax({
      url: '/table/high'
    })
    const finalResult = result.result.list.map(item => {
       item.key = item.id
       return item
     })
    this.setState({
      dataSource: finalResult
    })
  }

  // 排序
  sortChange = (pagination, filters, sorter, extra) => {
      console.log(sorter.order)
      this.setState({
          sortOrder: sorter.order
      })
  }

  // 删除按钮
  deleteAction = (item) => {
      console.log(item)
  }
  render() {
    const columns = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id',
        width: 80
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName',
        width: 80
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        width: 80,
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        width: 80
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        width: 80,
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        width: 80,
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday',
        width: 80
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address',
        width: 80
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time',
        width: 80
      }
    ]

    const columns2 = [
      {
        title: 'id',
        key: 'id',
        width: 80,
        fixed: 'left',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        fixed: 'left',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        width: 80
      },
      {
        title: '状态',
        key: 'state',
        width: 80,
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 120,
        fixed: 'right',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        fixed: 'right',
        dataIndex: 'time'
      }
    ]

    const columns3 = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
        // 默认排序
        defaultSortOrder: ['ascend'],
        // 按照 降序/升序 进行排序
        sortDirections: [this.state.sortOrder]
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ]

    const columns4 = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age'
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': <Badge status="success" text="游泳" />,
            '2': <Badge status="success" text="打篮球" />,
            '3': <Badge status="success" text="踢足球" />,
            '4': <Badge status="success" text="跑步" />,
            '5': <Badge status="success" text="爬山" />,
            '6': <Badge status="success" text="骑行" />
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text,item) => <a onClick={() => this.deleteAction(item)}>Delete</a>
      }
    ]

    return (
      <div>
        <Card title="表头固定" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title="两侧固定" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 50 }}
            // scroll={{ y: 240 }}
            scroll={{ x: 2650 }}
          />
        </Card>
        <Card title="表头与两侧固定" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 50 }}
            // scroll={{ y: 240 }}
            scroll={{ x: 2650, y: 240 }}
          />
        </Card>
        <Card title="带排序的表格" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 50 }}
            onChange={this.sortChange}
          />
        </Card>
        <Card title="带徽标和删除按钮的表格" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 50 }}
          />
        </Card>
      </div>
    )
  }
}
