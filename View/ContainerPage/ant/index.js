import React from 'react'
import {
  Link
} from 'react-router'

const font = {
  lineHeight: '30px',
  color: '#999',
  paddingTop: '10px',
  fontSize: '16px'
}
const font1 = {
  lineHeight: '30px',
  color: '#999',
  paddingTop: '10px',
  fontSize: '20px',
}
const font2 = {
  lineHeight: '30px',
  color: '#999',
  paddingTop: '10px',
  fontSize: '16px',
  color: 'red'
}

class AntCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div>
          <h1>更多组件请参考</h1>
          <p style={font}>Ant Design of React 是面向中台的 UI 设计语言。</p>
          <p style={font}>从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 40 个以上。定位于中台业务的 Ant Design 兼顾专业和非专业的设计人员，具有学习成本低、上手速度快、实现效果好等特点，并且提供从界面设计到前端开发的全链路生态，可以大大提升设计和开发的效率。</p>

          <p style={font1}><a href="http://ant.design/docs/react/introduce" target="_blank">打开Ant Design</a></p>

          <p  style={font2}>
              注意调用Ant组件方式有所变动:<br />
              因为Ant的组件已全部移动到了本项目下Components目录下<br />
              import Checkbox from '../../Components/组件名称';
          </p>
      </div>
    );
  }
}

module.exports = AntCom