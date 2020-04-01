import React, { Component } from 'react'
import { Form, Card, Input, Button, message, Icon, Checkbox } from 'antd'
import './form_item.less'
const FormItem = Form.Item

class Login extends Component {
  // 提交表单
  handleSubmit = (e) => {
      e.preventDefault()
      const value = this.props.form.getFieldsValue()
      this.props.form.validateFields((err, values) => {
        if(!err) {
              console.log(value)
              message.success(`${value.username}, 恭喜你已经通过表单校验，密码为${value.password}`)
        } else {
            // console.log(err)
            message.error('请输入完整再进行提交')
        }
    })

  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div id="components-form-demo-normal-login">
        <Card title="内联表单" style={{ marginBottom: '15px' }}>
          <Form layout="inline">
            <FormItem key="1xb">
              {getFieldDecorator('username', {
                initialValue: '123',
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(<Input type="text" placeholder="请输入账号" />)}
            </FormItem>
            <FormItem key="2xb">
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(<Input type="text" placeholder="请输入密码" />)}
            </FormItem>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
       
        </Card>

        <Card title="水平表单" style={{ marginBottom: '15px' }}>
          <Form className="login-form">
            <FormItem key="3xb">
              {getFieldDecorator('username', {
                initialValue: '123',
                rules: [
                  { required: true, message: 'Please input your username!' },
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
            <FormItem key="4xb">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="text"
                  placeholder="请输入密码"
                />
              )}
            </FormItem>
            <FormItem key="5xb">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button
                type="primary"
                onClick={this.handleSubmit}
                className="login-form-button"
              >
                登录
              </Button>
            </FormItem>
          </Form>
       
        </Card>
      </div>
    )
  }
}

export default Form.create()(Login)
