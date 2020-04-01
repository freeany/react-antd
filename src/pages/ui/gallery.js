import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd'
import './ui.less'
const { Meta } = Card

/* 
    图片画廊组件
*/
export default class Gallery extends Component {
  state = {
    visible: false,
    imgContent: null
  }
  handleOpenImg = item2 => {
    this.setState({
      visible: true,
      imgContent: '/gallery/'+item2
    })
  }
  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
    const imgList = imgs.map(item =>
      item.map((item2, index2) => (
        <Card
          onClick={() => this.handleOpenImg(item2)}
          key={index2}
          hoverable
          cover={<img alt="example" src={`/gallery/${item2}`} />}
        >
          <Meta title="美女" description="www.instagram.com" />
        </Card>
      ))
    )
    return (
      <div>
        <Card title="画廊">
          <Row>
            <Col span={5}>{imgList[0]}</Col>
            <Col span={5}>{imgList[1]}</Col>
            <Col span={5}>{imgList[2]}</Col>
            <Col span={5}>{imgList[3]}</Col>
          </Row>
        </Card>

        <Modal
          width={300}
          height={500}
          title="展示美女"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          footer={null}
        >
          <img src={this.state.imgContent} style={{ width: '100%' }} />
        </Modal>
      </div>
    )
  }
}
