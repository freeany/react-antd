//api.js
import Mock from "mockjs"

const url = {
  tableList: 'http://ccc.com/table/list',
  tableHigh: 'http://ccc.com/table/high',
  openCity: 'http://ccc.com/city/open_city',
  orderList: 'http://ccc.com/order/list'
}

Mock.mock(url.tableList, {
  code: 0,
  msg: '',
  result: {
    'list|10': [
      {
        'id|+1': 1,
        userName: '@cname',
        'sex|1-2': 1,
        'state|1-5': 1,
        'interest|1-5': 1,
        birthday: '2000-01-01',
        address: '北京海淀区奥利匹克公园',
        time: '09:00'
      }
    ],
    page: 1,
    pageSize: 10,
    total: 100
  }
})

Mock.mock(url.tableHigh, {
  code: 0,
  msg: '',
  result: {
    'list|10': [
      {
        'id|+1': 1,
        userName: '@cname',
        'sex|1-2': 1,
        'age|10-40': 1,
        'state|1-5': 1,
        'interest|1-5': 1,
        birthday: '2000-01-01',
        address: '北京海淀区奥利匹克公园',
        time: '09:00'
      }
    ],
    page: 1,
    pageSize: 10,
    total: 100
  }
})

Mock.mock(url.openCity, {
  "code": 0,
  "result": {
    "page": 1,
    "pageSize": 10,
    "total": 60,
    "pageCount": 6,
    "item_list|60": [{
      "id|+1": 1,
      "name": "@city",
      "mode|1-2": 1,
      "op_mode|1-2": 1,
      "franchisee_id": 77,
      "franchisee_name": "松果自营",
      "city_admins|1-2": [{
        "user_name": "@cname",
        "user_id|+1": 10001
      }],
      "open_time": "@datatime",
      "sys_user_name": "@cname",
      "update_time": 1520476737000
    }]
  }
})

Mock.mock(url.orderList, {
  code: 0,
  result: {
    page: 1,
    pageSize: 10,
    total: 70,
    pageCount: 6,
    'item_list|10': [
      {
        'id|+1': 1,
        order_sn: /T180[0-9]{6}/,
        bike_sn: '800116090',
        user_id: 908352,
        user_name: '@cname',
        mobile: /1[0-9]{10}/,
        distance: 2000,
        total_time: 4000,
        'status|1-2': 1,
        start_time: '@datetime',
        end_time: '@datetime',
        total_fee: 1000,
        user_pay: 300
      }
    ]
  }
})


