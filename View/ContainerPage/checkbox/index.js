import React from 'react'
import {
  Link
} from 'react-router'
import Checkbox from '../../Components/checkbox';
import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;
var ReactMarkdown = require('react-markdown');
var source = 'import Checkbox from "../../Components/checkbox";<br />' +
  'onChange(e) {<br />' +
  '&nbsp;&nbsp;&nbsp;&nbsp;console.log(`checked = ${e.target.checked}`);<br />' +
  '}<br />' +
  '&lt;Checkbox defaultChecked={false} onChange={this.onChange}&gt;Checkbox&lt;/Checkbox&gt;';

var source1 = 'import Checkbox from "../../Components/checkbox";<br />' +
  '&lt;Checkbox defaultChecked={false} disabled /><br />' +
  '&lt;Checkbox defaultChecked disabled/>';



var source2 = 'import Checkbox from "../../Components/checkbox";<br />' +
  "const CheckboxGroup = Checkbox.Group;<br />" +

  "function onChange(checkedValues) {<br />" +
  "  console.log('checked = ', checkedValues);<br />" +
  "}<br />" +

  "const plainOptions = ['Apple', 'Pear', 'Orange'];<br />" +
  "const options = [<br />" +
  "  { label: '苹果', value: 'Apple' },<br />" +
  "  { label: '梨', value: 'Pear' },<br />" +
  "  { label: '橘', value: 'Orange' },<br />" +
  "];<br />" +
  "const optionsWithDisabled = [<br />" +
  "  { label: '苹果', value: 'Apple' },<br />" +
  "  { label: '梨', value: 'Pear' },<br />" +
  "  { label: '橘', value: 'Orange', disabled: false },<br />" +
  "];<br />" +

  "&lt;CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} /><br />" +
  "&lt;CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} /><br />" +
  "&lt;CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} /><br />";



const CheckboxGroup = Checkbox.Group;


class CheckboxCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  onChange(e) {
    console.log(`
checked = $ {
  e.target.checked
}
`);
  }

  onChange1(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  render() {

    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [{
      label: '苹果',
      value: 'Apple'
    }, {
      label: '梨',
      value: 'Pear'
    }, {
      label: '橘',
      value: 'Orange'
    }, ];
    const optionsWithDisabled = [{
      label: '苹果',
      value: 'Apple'
    }, {
      label: '梨',
      value: 'Pear'
    }, {
      label: '橘',
      value: 'Orange',
      disabled: false
    }, ];



    return (
      <div>
          <h1>CheckboxCom</h1>

          

          <div className="box boxH">

              <div className="flex1">

                  <div className='codeBox'>
                        <Checkbox defaultChecked={false} onChange={this.onChange}>Checkbox</Checkbox>
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                        <ReactMarkdown source={source} />
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>

                  <div className='codeBox'>
                        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange1} />
                        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange1} />
                        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange1} />
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                        <ReactMarkdown source={source2} />
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>

              </div>

              <div className="flex1">

                  <div className='codeBox'>
                        <Checkbox className="mR10" defaultChecked={false} disabled />
                        <Checkbox defaultChecked disabled />
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
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

module.exports = CheckboxCom