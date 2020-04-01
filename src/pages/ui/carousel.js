import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'

export default class Notice extends Component {
  onChange = (a, b, c) => {
    console.log(a, b, c)
  }
  render() {
    return (
      <div className="slider-wrap">
        <Card title="文字类型的轮播图">
          <Carousel autoplay afterChange={this.onChange}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片类型的轮播图">
          <Carousel autoplay afterChange={this.onChange}>
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt="" />
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
