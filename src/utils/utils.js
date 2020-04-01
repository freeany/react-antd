import React from 'react'
import { Select } from 'antd'
const Option = Select.Option
export default {
  formateDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()
    )
  },
  // 分页的配置
  pagination(data, callback) {
    return {
      onChange: current => {
        callback(current)
      },
      current: data.page,
      pageSize: data.pageSize,
      total: data.total,
      showTotal: () => {
        return `共${data.total}条`
      },
      showQuickJumper: true
    }
  },
  getOptionList(data) {
    if (!data) {
      return []
    }
    let options = [] //[<Option value="0" key="all_key">全部</Option>];
    data.map(item => {
      const id = item.id
      options.push(
        <Option value={item.id} key={id}>
          {item.name}
        </Option>
      )
    })
    
    return options
  },
  updateSelectedItem(selectedRowKeys, selectedItem, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedItem,
        selectedIds
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem
      })
    }
  }
}
