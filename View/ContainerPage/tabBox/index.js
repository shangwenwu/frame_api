import React from 'react'
import {
  Link
} from 'react-router'


import Tab from '../../Components/TabBox'


import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

var ReactMarkdown = require('react-markdown');
var source1 = "````\nvar tabBoxConfig1 = {\n      id: 'tabId',\n      tabClass: '', //tab默认样式\n      tabAction: '', //tab选中样式\n      tabBox: '', //内容区样式\n      tab: ['标签1', '标签2', '标签3', '', ''],\n      data: [\n        <TabBox1 />,\n        <TabBox2 />,\n        <TabBox3 />\n      ]\n    }\n<Tab params={tabBoxConfig1} />\n";


class TabCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}



  render() {

    var tabBoxConfig1 = {
      id: 'tabId',
      tabClass: '', //tab默认样式
      tabAction: '', //tab选中样式
      tabBox: '', //内容区样式
      tab: ['标签1', '标签2', '标签3', '', ''],
      data: [
        <TabBox1 />,
        <TabBox2 />,
        <TabBox3 />
      ]
    }

    var tabBoxConfig2 = {
      id: 'tabId',
      tabClass: '', //tab默认样式
      tabAction: '', //tab选中样式
      tabBox: '', //内容区样式
      tab: ['', '', '标签1', '标签2', '标签3'],
      data: [
        <TabBox1 />,
        <TabBox2 />,
        <TabBox3 />
      ]
    }

    var tabBoxConfig3 = {
      id: 'tabId',
      tabClass: '', //tab默认样式
      tabAction: '', //tab选中样式
      tabBox: '', //内容区样式
      tab: ['', '', '标签1', '标签2', '标签3', '', ''],
      data: [
        <TabBox1 />,
        <TabBox2 />,
        <TabBox3 />
      ]
    }

    var tabBoxConfig4 = {
      id: 'tabId',
      tabClass: '', //tab默认样式
      tabAction: '', //tab选中样式
      tabBox: '', //内容区样式
      tab: ['标签1', '标签2', '标签3'],
      data: [
        <TabBox1 />,
        <TabBox2 />,
        <TabBox3 />
      ]
    }



    return (
      <div>
          <h1>Tab 标签页</h1>
          
          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>

                        <div className="box boxH">
                            <div className="flex1" style={{marginRight:'5px'}}>
                                  <Tab params={tabBoxConfig1} />
                                  <div className="mT10">
                                      <Tab params={tabBoxConfig2} />
                                  </div>
                            </div>
                            <div className="flex1" style={{marginLeft:'5px'}}>
                                  <Tab params={tabBoxConfig3} />
                                  <div className="mT10">
                                      <Tab params={tabBoxConfig4} />
                                  </div>
                            </div>
                        </div>

                        <div className="codeView">
                            <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                       <p>
                                                   参数配置：<br />
                                                   id: 'tabId',<br />
                                                   tabClass: '', tab默认class样式名称<br />
                                                   tabAction: '', tab选中样式名称<br />
                                                   tabBox: '', 内容区样式名称<br />
                                                   tab: ['', '','标签1', '标签2', '标签3', '标签4', '', '', '', ''],<br />
                                                   data: [组件1，组件2，组件3....]
                                        </p>
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

class TabBox1 extends React.Component {
  render() {
    return (
      <div>
          tabBox params配置：<br /><br />
           id: 'tabId',<br />
           tabClass: '', tab默认样式<br />
           tabAction: '', tab选中样式<br />
           tabBox: '', 内容区样式<br />
           tab: ['', '','标签1', '标签2', '标签3', '标签4', '', '', '', ''],<br />
           data: [组件1，组件2，组件3....]


      </div>
    )
  }
}

class TabBox2 extends React.Component {
  render() {
    return (
      <div>Component2<p>222222222</p></div>
    )
  }
}

class TabBox3 extends React.Component {
  render() {
    return (
      <div>Component3<p>3333333</p></div>
    )
  }
}


module.exports = TabCom