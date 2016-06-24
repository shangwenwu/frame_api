import React from 'react'
import {
  Link
} from 'react-router'

import Tip from '../../Components/Tip'

import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

var ReactMarkdown = require('react-markdown');
var source1 = "````\nvar tipOption = {\n      content: '提示信息提示信息,tip参数配置：宽:220px,left:100px居右,left:-100px居左,left:0、不定义居中',\n      width: 220,\n      left: -50\n}\n描述文本描述文本 <Tip params={tipOption}/>\n";


class TipCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}



  render() {

    var tipOption = {
      content: '提示信息提示信息,tip参数配置：宽:220px,left:100px居右,left:-100px居左,left:0、不定义居中',
      width: 220,
    }

    var tipOption1 = {
      content: '提示信息提示信息,tip参数配置：宽:220px,left:100px居右,left:-100px居左,left:0、不定义居中',
      width: 220,
      left: -80
    }

    var tipOption2 = {
      content: '提示信息提示信息,tip参数配置：宽:220px,left:100px居右,left:-100px居左,left:0、不定义居中',
      width: 220,
      left: 80
    }

    return (
      <div>
          <h1>Tip 汽泡文字提示</h1>
          
          
          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>
                        描述文本描述文本 <Tip params={tipOption}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;描述文本描述文本 <Tip params={tipOption1}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;描述文本描述文本 <Tip params={tipOption2}/>
                        <div className="codeView">
                            <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                       <p>参数配置：如宽:220px,left:100px居右,left:-100px居左,left不定义或为0时居中</p>
                                       <ReactMarkdown source={source1} />

                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>
              </div>
          </div>

          
      </div>
    );
  }
}

module.exports = TipCom