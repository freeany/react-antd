import React from 'react'
import { Card, Table, Modal } from 'antd'
import axios from '../../axios'
// import axios from 'axios'
import '../../mock/api'
import Utils from '../../utils/utils'

export default class BasicTable extends React.Component {
  constructor(props) {
    super(props)
    this.params = {
      page: 1
    }
    this.state = {
      dataSource: [],
      tableResult: {}
    }
  }
  componentDidMount() {
    this.getQueryData()
  }
  getQueryData = async () => {
    const result = await axios.ajax({
      url: '/table/list'
    //   data: {
    //       params: {
    //           page: this.params.page
    //       }
    //   }
    })
    // console.log(result)
    if (result.code === 0) {
      console.log(result.result)
      const finalResult = result.result.list.map(item => {
        item.key = item.id
        return item
      })
      this.setState({
        dataSource: finalResult,
        tableResult: result.result
      })
    }
  }

  // 可选择单选的表格的方法
  handleDelete = () => {

  }

  // 分页的onChage方法
  pageChange = page => {
      console.log(`当前页为${page}`)
  }

  render() {
    const columns = [
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

    // 可选择单选的表格的属性
    const rowSelection = {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        //  selectedRowKeys 是选中的角标  
        //  selectedRows 是选中的内容 
        // console.log(selectedRowKeys, selectedRows)
        Modal.info({
          title: '信息',
          content: `选择了角标为${selectedRowKeys[0]}, id为${selectedRows[0].id}的数据`
        })
      }
    }
    // 可选择多选的表格的属性
    const rowSelection2 = {
      onChange: (selectedRowKeys, selectedRows) => {
        //  selectedRowKeys 是选中的角标
        //  selectedRows 是选中的内容
        // console.log(selectedRowKeys, selectedRows)
        let indexs = ''
        let ids = ''
        selectedRowKeys.forEach(item => {
            indexs = item + ', ' +indexs 
        })
        selectedRows.forEach(item => {
            ids = ids  + ', ' + item.id
        })
        Modal.info({
          title: '信息',
          content: `选择了角标为${indexs}  ids为${ids}的数据`
        })
      }
    }
    return (
      <div>
        <Card title="基础表格" style={{ margin: '10px 0' }}>
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
          />
        </Card>
        <Card title="可选择单选表格" style={{ margin: '10px 0' }}>
          {/* <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div> */}
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
            rowSelection={rowSelection}
          />
        </Card>
        <Card title="可选择多选表格" style={{ margin: '10px 0' }}>
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
            rowSelection={rowSelection2}
          />
        </Card>
        <Card title="分页表格" style={{ margin: '10px 0' }}>
          <Table
            bordered
            pagination={Utils.pagination(
              this.state.tableResult,
              this.pageChange
            )}
            dataSource={this.state.dataSource}
            columns={columns}
            rowSelection={rowSelection2}
          />
        </Card>
      </div>
    )
  }
}
