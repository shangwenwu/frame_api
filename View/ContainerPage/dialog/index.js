import React from 'react'
import {
  Link
} from 'react-router'

import Dialog from '../../Components/Dialog'
import Button from '../../Components/button';
import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;
const ButtonGroup = Button.Group;

var ReactMarkdown = require('react-markdown');
var source1 = '````javascript\nconstructor(props) {\n  super(props);\n  this.state = {\n       DialogCon: ""\n  };\n}';
var source2 = '````javascript\n{this.state.DialogCon}';
var source3 = '````javascript\n<button type="button" onClick={this.DialogView.bind(this)} className="btn btn-success mR10">弹出对话框</button>';
var source4 = "````javascript\nDialogView() {\n   this.setState({\n      DialogCon: < Dialog params = {\n        {\n          id: 'tip',\n          title: '产品详情',\n          width: '600',\n          height: '500',\n          button: [{\n            text: '取消',\n          }, {\n            text: '取消',\n          }, {\n            text: '取消',\n          }, {\n            text: '确定',\n            callback: function() {\n              alert('223');\n              this.setState({\n                DialogCon: ''\n              });\n            }.bind(this)\n          }],\n          component: <div><h1>标题</h1><p>文字描述文字描</p></div>,\n          closeCallback: function() {\n            this.setState({\n              DialogCon: ''\n            });\n          }.bind(this)\n        }\n      }\n    />})\n}";



class DialogCom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        DialogCon: ''
      }
    }
    componentDidMount() {}
    componentWillMount() {}
    render() {
      return (
        <div>
          <h1>Dialog 对话框</h1>
          {this.state.DialogCon}
          

          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>
                        <button type="button" onClick={this.DialogView1.bind(this)} className="btn btn-success mR10">弹出对话框1</button>
                        <button type="button" onClick={this.DialogView2.bind(this)} className="btn btn-success mR10">弹出对话框2</button>
                        <button type="button" onClick={this.DialogView3.bind(this)} className="btn btn-success mR10">弹出对话框3</button>
                        <button type="button" onClick={this.DialogView4.bind(this)} className="btn btn-success mR10">弹出对话框4</button>
                        <div className="codeView">
                            <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                       <p>初始化DialogCon变量为空</p>
                                       <ReactMarkdown source={source1} />
                                       <p>render return写入任意位置</p>
                                       <ReactMarkdown source={source2} />
                                       <p>绑定到触发事件</p>
                                       <ReactMarkdown source={source3} />
                                       <p>添加事件</p>
                                       <ReactMarkdown source={source4} />
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

    DialogView1() {
        this.setState({
              DialogCon: < Dialog params = {
                {
                  id: 'tip',
                  title: '信息提示',
                  width: '400',
                  height: '150',
                  body: '信息提示 信息提示 信息提示 信息提示',
                  closeCallback: function() {
                    this.setState({
                      DialogCon: ''
                    });
                  }.bind(this)
                }
              }
              />})
            }

            DialogView2() {
              this.setState({
                    DialogCon: < Dialog params = {
                      {
                        id: 'tip',
                        title: '产品详情',
                        width: '500',
                        height: '400',
                        button: [{
                          text: '取消',
                        }, {
                          text: '确定',
                          callback: function() {
                            alert('223');
                            this.setState({
                              DialogCon: ''
                            });
                          }.bind(this)
                        }],
                        body: 'asfafdsfsdfd',
                        component: '',
                        closeCallback: function() {
                          this.setState({
                            DialogCon: ''
                          });
                        }.bind(this)
                      }
                    }
                    />})
                  }

                  DialogView3() {
                    this.setState({
                          DialogCon: < Dialog params = {
                            {
                              id: 'tip',
                              title: '产品详情',
                              width: '600',
                              height: '500',
                              button: [{
                                text: '取消',
                              }, {
                                text: '取消',
                              }, {
                                text: '取消',
                              }, {
                                text: '确定',
                                callback: function() {
                                  alert('223');
                                  this.setState({
                                    DialogCon: ''
                                  });
                                }.bind(this)
                              }],
                              component: <div><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p><h1>标题</h1><p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p></div>,
                              closeCallback: function() {
                                this.setState({
                                  DialogCon: ''
                                });
                              }.bind(this)
                            }
                          }
                          />})
                        }

                        DialogView4() {
                          this.setState({
                              DialogCon: < Dialog params = {
                                {
                                  id: 'tip',
                                  title: '产品详情',
                                  width: '400',
                                  height: '200',
                                  button: [{
                                    text: '取消',
                                  }, {
                                    text: '确定',
                                    callback: function() {
                                      alert('223');
                                      this.setState({
                                        DialogCon: ''
                                      });
                                    }.bind(this)
                                  }],
                                  body: 'asfafdsfsdfd',
                                  component: '',
                                  closeCallback: function() {
                                    this.setState({
                                      DialogCon: ''
                                    });
                                  }.bind(this)
                                }
                              }
                              />})
                            }

                          }

                          module.exports = DialogCom