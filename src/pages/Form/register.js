import React from 'react'
import {
  Card,
  Button,
  Form,
  Input,
  Icon,
  Select,
  Radio,
  InputNumber,
  Switch,
  message,
  DatePicker,
  TimePicker,
  Upload,
  Checkbox
} from 'antd'
import './upload.less'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
moment.locale('zh-cn')
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea

class Register extends React.Component {
  state = {
    loading: false,
    imageUrl: ''
  }

  // 提交表单函数
  handleSubmit = e => {
    e.preventDefault()
    const value = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(value)
        message.success(
          `${value.username}, 恭喜你已经通过表单校验，密码为${value.userPwd}`
        )
      } else {
        //console.log(err[Object.keys(err)[0]].errors[0].message)
        message.error(err[Object.keys(err)[0]].errors[0].message)
      }
    })
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  // 上传图片的函数
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      )
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    // 表单响应式 ,放在Form-Item上， 3.18.0以后放在Form中
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 10,
          offset: 2
        }
      }
    }

    // 如果没有用户上传时的样式
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div>
        <Card title="注册表单">
          {/* <Form {...formItemLayout}> */}
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator('username', {
                initialValue: '',
                rules: [
                  { required: true, message: '请输入用户名' },
                  { min: 3, max: 5, message: '长度不符合' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="text"
                  placeholder="请输入账号"
                />
              )}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator('userPwd', {
                initialValue: '',
                rules: [
                  { required: true, message: '请输入密码' },
                  { min: 3, max: 5, message: '长度不符合' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="text"
                  placeholder="请输入密码"
                />
              )}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator('sex', {
                initialValue: '1',
                rules: [{ required: true, message: '请选择性别' }]
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: 18,
                rules: [{ required: true, message: '请输入年龄' }]
              })(<InputNumber />)}
            </FormItem>

            <FormItem label="身份" {...formItemLayout}>
              {getFieldDecorator('state', {
                initialValue: '2',
                rules: [{ required: true, message: '请输入选择身份' }]
              })(
                <Select>
                  <Option value="1">浪里白条</Option>
                  <Option value="2">鲁智深</Option>
                  <Option value="3">武松</Option>
                  <Option value="4">张无忌</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator('interest', {
                initialValue: ['3', '4'],
                rules: [{ required: true, message: '请输入选择爱好' }]
              })(
                <Select mode="multiple">
                  <Option value="1">游泳</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">踢足球</Option>
                  <Option value="4">跑步</Option>
                  <Option value="5">爬山</Option>
                  <Option value="6">骑行</Option>
                  <Option value="7">桌球</Option>
                  <Option value="8">麦霸</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="已婚" {...formItemLayout}>
              {getFieldDecorator('isMarried', {
                valuePropName: 'checked',
                initialValue: true,
                rules: [{ required: true, message: '请选择是否已婚' }]
              })(<Switch />)}
            </FormItem>

            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator('birthday', {
                initialValue: moment(
                  '2015/01/01 12:00:59',
                  'YYYY-MM-DD HH:mm:ss'
                ),
                rules: [{ required: true, message: '请选择出生日期' }]
              })(
                <DatePicker
                  locale={locale}
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                />
              )}
            </FormItem>

            <FormItem label="生日2" {...formItemLayout}>
              {getFieldDecorator('birthday2', {
                initialValue: moment('2015/01/01', 'YYYY-MM-DD'),
                rules: [{ required: true, message: '请选择出生日期2' }]
              })(<DatePicker locale={locale} format="YYYY-MM-DD" />)}
            </FormItem>

            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator('address', {
                initialValue: '哈哈哈哈',
                rules: [{ required: true, message: '请输入联系地址' }]
              })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
            </FormItem>

            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator('bedtime', {
                initialValue: moment('07:08', 'HH:mm'),
                rules: [{ required: true, message: '请输入早起时间' }]
              })(<TimePicker format={'HH:mm'} />)}
            </FormItem>

            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator('imgUrl', {
                // initialValue: moment('07:08', 'HH:mm'),
                rules: [{ required: true, message: '请上传头像' }]
              })(
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  onChange={this.handleChange}
                >
                  {this.state.imageUrl ? (
                    <img
                      src={this.state.imageUrl}
                      alt="avatar"
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('isPromise', {
                valuePropName: 'checked',
                initialValue: true,
                rules: [{ required: true, message: '请勾选协议' }]
              })(<Checkbox>请勾选用户协议</Checkbox>)}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
              <Button onClick={this.handleSubmit} type="primary">
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Register)
