import React from 'react'
import {
  Link
} from 'react-router'


import Form from '../../Components/Form'
import FormInput from '../../Components/FormInput'
import FormSelect from '../../Components/FormSelect'
import FormCheckbox from '../../Components/FormCheckbox'
import FormSearch from '../../Components/FormSearch'
import FormButton from '../../Components/FormButton'



import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

var ReactMarkdown = require('react-markdown');
var source1 = "````\nvar formConfig = [\n     [{otherFromCom,data},{otherFromCom,data},....],//一行\n     [{otherFromCom,data},{otherFromCom,data},....],//二行\n]\n";

var source2 = "````\nconst formConfig1 = [\n      [{\n        component: FormInput,\n        data: {\n          type: 'email',\n          placeholder: '文本提示',\n          defaultValue: '',\n          id: 'inputEmail3',\n          disabled: false,\n          name: '21asas',\n          labelText: '名称',\n          labelW: 1,\n          width: 2\n        }\n      }, {\n        component: FormSelect,\n        data: {\n          id: 'selectId',\n          defaultValue: '',\n          name: 'wwwww',\n          disabled: false,\n          options: [{\n            value: '11',\n            text: 'adaf'\n          }, {\n            value: '22',\n            text: 'hjgfhj'\n          }, {\n            value: '33',\n            text: 'xcvxc'\n          }, {\n            value: '444',\n            text: '6767ds'\n          }],\n          width: 2\n        }\n      }, {\n        component: FormSelect,\n        data: {\n          id: 'selectId',\n          defaultValue: '',\n          name: 'wwwww',\n          disabled: false,\n          options: [{\n            value: '11',\n            text: 'adaf'\n          }, {\n            value: '22',\n            text: 'hjgfhj'\n          }, {\n            value: '33',\n            text: 'xcvxc'\n          }, {\n            value: '444',\n            text: '6767ds'\n          }],\n          width: 2\n        }\n      }, {\n        component: FormSearch,\n        data: {\n          searchText: '搜1索',\n          placeholder: '输1入产品ID及sid',\n          defaultValue: 11111,\n          id: 'keyword',\n          name: 'keyword',\n          width: 3,\n          callback: function(data) {\n            console.log(data)\n          }\n        }\n      }, {\n        component: FormButton,\n        data: {\n          text: '美菜产品库',\n          width: 2,\n          callback: function(data) {\n            console.log(data)\n          }\n        }\n      }],\n      [{\n        component: FormCheckbox,\n        data: {\n          type: 'checkBox',\n          id: 'xxx1',\n          name: 'iiii1',\n          disabled: false,\n          options: [{\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }],\n\n          labelText: '名称',\n          labelW: 1,\n          width: 5\n        }\n      }, {\n        component: FormCheckbox,\n        data: {\n          type: 'radio',\n          id: 'xxx1',\n          name: 'ffffff',\n          disabled: false,\n          options: [{\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }],\n\n          labelText: '名称',\n          labelW: 1,\n          width: 5\n        }\n      }]\n    ];\n\n<Form params={this.formConfig1}/>\n";


var source3 = "````\nconst formConfig2 = [\n      [{\n        component: FormInput,\n        data: {\n          type: 'email',\n          placeholder: '文本提示',\n          defaultValue: '',\n          id: 'inputEmail3',\n          disabled: false,\n          name: '21asas',\n          labelText: '文本输入',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormInput,\n        data: {\n          type: 'email',\n          placeholder: '文本提示',\n          defaultValue: '有值有值有值',\n          id: 'inputEmail3',\n          disabled: false,\n          name: '21asas',\n          labelText: '文本输入',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormInput,\n        data: {\n          type: 'email',\n          placeholder: '文本提示',\n          defaultValue: '有值有值有值',\n          id: 'inputEmail3',\n          disabled: true,\n          name: '21asas',\n          labelText: '文本输入',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormSelect,\n        data: {\n          id: 'selectId',\n          defaultValue: '',\n          name: 'wwwww',\n          disabled: false,\n          options: [{\n            value: '11',\n            text: 'adaf'\n          }, {\n            value: '22',\n            text: 'hjgfhj'\n          }, {\n            value: '33',\n            text: 'xcvxc'\n          }, {\n            value: '444',\n            text: '6767ds'\n          }],\n          labelText: '选择框',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormSelect,\n        data: {\n          id: 'selectId',\n          defaultValue: '444',\n          name: 'wwwww',\n          disabled: false,\n          options: [{\n            value: '11',\n            text: 'adaf'\n          }, {\n            value: '22',\n            text: 'hjgfhj'\n          }, {\n            value: '33',\n            text: 'xcvxc'\n          }, {\n            value: '444',\n            text: '6767ds'\n          }],\n          labelText: '选择框',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormSelect,\n        data: {\n          id: 'selectId',\n          defaultValue: '33',\n          name: 'wwwww',\n          disabled: true,\n          options: [{\n            value: '11',\n            text: 'adaf'\n          }, {\n            value: '22',\n            text: 'hjgfhj'\n          }, {\n            value: '33',\n            text: 'xcvxc'\n          }, {\n            value: '444',\n            text: '6767ds'\n          }],\n          labelText: '选择框',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormCheckbox,\n        data: {\n          type: 'checkBox',\n          id: 'xxx1',\n          name: 'iiii1',\n          disabled: false,\n          options: [{\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }],\n\n          labelText: '多选',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormCheckbox,\n        data: {\n          type: 'radio',\n          id: 'xxx1',\n          name: 'iiii1',\n          disabled: false,\n          options: [{\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }, {\n            defaultValue: 1,\n            text: 'a',\n            defaultChecked: false,\n          }, {\n            defaultValue: 2,\n            text: 'b',\n            defaultChecked: false,\n          }],\n\n          labelText: '单选',\n          labelW: 2,\n          width: 8\n        }\n      }],\n      [{\n        component: FormButton,\n        data: {\n          text: '表单提交',\n          width: 8,\n          labelText: ' ',\n          labelW: 2,\n          callback: function(data) {\n            console.log(data)\n          }\n        }\n      }]\n    ];\n\n<Form  params={this.formConfig2}/>\n";



class FormCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}



  render() {

    this.formConfig1 = [
      [{
        component: FormInput,
        data: {
          type: 'email',
          placeholder: '文本提示',
          defaultValue: '',
          id: 'inputEmail3',
          disabled: false,
          name: '21asas',
          labelText: '名称',
          labelW: 1,
          width: 2
        }
      }, {
        component: FormSelect,
        data: {
          id: 'selectId',
          defaultValue: '',
          name: 'wwwww',
          disabled: false,
          options: [{
            value: '11',
            text: 'adaf'
          }, {
            value: '22',
            text: 'hjgfhj'
          }, {
            value: '33',
            text: 'xcvxc'
          }, {
            value: '444',
            text: '6767ds'
          }],
          width: 2
        }
      }, {
        component: FormSelect,
        data: {
          id: 'selectId',
          defaultValue: '',
          name: 'wwwww',
          disabled: false,
          options: [{
            value: '11',
            text: 'adaf'
          }, {
            value: '22',
            text: 'hjgfhj'
          }, {
            value: '33',
            text: 'xcvxc'
          }, {
            value: '444',
            text: '6767ds'
          }],
          width: 2
        }
      }, {
        component: FormSearch,
        data: {
          searchText: '搜1索',
          placeholder: '输1入产品ID及sid',
          defaultValue: 11111,
          id: 'keyword',
          name: 'keyword',
          width: 3,
          callback: function(data) {
            console.log(data)
          }
        }
      }, {
        component: FormButton,
        data: {
          text: '美菜产品库',
          width: 2,
          callback: function(data) {
            console.log(data)
          }
        }
      }],
      [{
        component: FormCheckbox,
        data: {
          type: 'checkBox',
          id: 'xxx1',
          name: 'iiii1',
          disabled: false,
          options: [{
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }],

          labelText: '名称',
          labelW: 1,
          width: 5
        }
      }, {
        component: FormCheckbox,
        data: {
          type: 'radio',
          id: 'xxx1',
          name: 'ffffff',
          disabled: false,
          options: [{
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }],

          labelText: '名称',
          labelW: 1,
          width: 5
        }
      }]
    ];

    this.formConfig2 = [
      [{
        component: FormInput,
        data: {
          type: 'email',
          placeholder: '文本提示',
          defaultValue: '',
          id: 'inputEmail3',
          disabled: false,
          name: '21asas',
          labelText: '文本输入',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormInput,
        data: {
          type: 'email',
          placeholder: '文本提示',
          defaultValue: '有值有值有值',
          id: 'inputEmail3',
          disabled: false,
          name: '21asas',
          labelText: '文本输入',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormInput,
        data: {
          type: 'email',
          placeholder: '文本提示',
          defaultValue: '有值有值有值',
          id: 'inputEmail3',
          disabled: true,
          name: '21asas',
          labelText: '文本输入',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormSelect,
        data: {
          id: 'selectId',
          defaultValue: '',
          name: 'wwwww',
          disabled: false,
          options: [{
            value: '11',
            text: 'adaf'
          }, {
            value: '22',
            text: 'hjgfhj'
          }, {
            value: '33',
            text: 'xcvxc'
          }, {
            value: '444',
            text: '6767ds'
          }],
          labelText: '选择框',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormSelect,
        data: {
          id: 'selectId',
          defaultValue: '444',
          name: 'wwwww',
          disabled: false,
          options: [{
            value: '11',
            text: 'adaf'
          }, {
            value: '22',
            text: 'hjgfhj'
          }, {
            value: '33',
            text: 'xcvxc'
          }, {
            value: '444',
            text: '6767ds'
          }],
          labelText: '选择框',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormSelect,
        data: {
          id: 'selectId',
          defaultValue: '33',
          name: 'wwwww',
          disabled: true,
          options: [{
            value: '11',
            text: 'adaf'
          }, {
            value: '22',
            text: 'hjgfhj'
          }, {
            value: '33',
            text: 'xcvxc'
          }, {
            value: '444',
            text: '6767ds'
          }],
          labelText: '选择框',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormCheckbox,
        data: {
          type: 'checkBox',
          id: 'xxx1',
          name: 'iiii1',
          disabled: false,
          options: [{
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }],

          labelText: '多选',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormCheckbox,
        data: {
          type: 'radio',
          id: 'xxx1',
          name: 'iiii1',
          disabled: false,
          options: [{
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }, {
            defaultValue: 1,
            text: 'a',
            defaultChecked: false,
          }, {
            defaultValue: 2,
            text: 'b',
            defaultChecked: false,
          }],

          labelText: '单选',
          labelW: 2,
          width: 8
        }
      }],
      [{
        component: FormButton,
        data: {
          text: '表单提交',
          width: 8,
          labelText: ' ',
          labelW: 2,
          callback: function(data) {
            console.log(data)
          }
        }
      }]
    ];

    return (

      <div>
          <h1>Form 表单</h1>
          
          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>

                        <div style={{margin:'50px 30px'}}>
                          <Form  params={this.formConfig1}/>
                        </div>
                        <div style={{margin:'50px 30px'}}>
                          <Form  params={this.formConfig2}/>
                        </div>
                        <div className="codeView">
                            <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                       
                                       <ReactMarkdown source={source1} />
                                       <p>
                                          otherFromCom:FormInput、FormSelect、FormCheckbox、FormSearch、FormButton<br />
                                          data:参考对应组件的配置信息<br />
                                          data中添加callback可以获取整个表单的数据<br />
                                          data中name属性为字段名称<br />
                                          data中labelText可选<br />
                                          每行中的data的labelW、width的和最大为12
                                       </p>

                                       <div className="box boxH">
                                            <div className="flex1" style={{marginRight:'5px'}}>
                                                <p>横向表单数据：</p>
                                                <ReactMarkdown source={source2} />
                                            </div>
                                            <div className="flex1" style={{marginLeft:'5px'}}>
                                                <p>竖向表单数据：</p>
                                                <ReactMarkdown source={source3} />
                                            </div>
                                        </div>
                                       

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


module.exports = FormCom