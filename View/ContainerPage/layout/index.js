import React from 'react'
import {
  Link
} from 'react-router'

import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    const bg = {
      height: '100px',
      marginTop: '10px',
      backgroundColor: '#ececec'
    }
    const block = {
      backgroundColor: '#0787c1',
      color: 'white',
      padding: '2px 5px'
    }
    return (
      <div>
          <h1>Layout 布局</h1>
          <p style={{marginTop:'30px'}}>css样式：box boxH boxV boxC flex_stretch flex_end flex_start flex1 flex2 flex3 flex4 flex5 flex6</p>
          <div className='codeBox'>
              <div className="codeView">
                  <Collapse defaultActiveKey={['1']} accordion style={{backgroundColor:'red'}}>
                      <Panel header={'查看代码'} key="1">
                          <div className="code">
                              水平<br />
                              &lt;div className='box boxH'&gt;<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="flex1"&gt;flex1&lt;/div&gt;<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="flex2"&gt;flex2&lt;/div&gt;<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="flex3"&gt;flex3&lt;/div&gt;<br />
                              &lt;/div&gt;<br /><br />
                              垂直<br />
                              &lt;div className='box boxV'&gt;<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="flex1"&gt;flex1&lt;/div&gt;<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="flex2"&gt;flex2&lt;/div&gt;<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="flex3"&gt;flex3&lt;/div&gt;<br />
                              &lt;/div&gt;<br /><br />
                              ......
                          </div>
                      </Panel>
                  </Collapse>
              </div>
          </div>


          <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>box Flex布局 例子</div>
            
            <div  style={{color:'red'}}>水平 boxH</div>
            <div className='box boxH'>
                <div className="flex1" style={{backgroundColor:'red'}}>flex1</div>
                <div className="flex2" style={{backgroundColor:'orange'}}>flex2</div>
                <div className="flex3" style={{backgroundColor:'green'}}>flex3</div>
                <div style={{width:'100px',backgroundColor:'yellow'}}>固定100px,其它平分剩余空间</div>
            </div>
            <div  style={{color:'red',marginTop:'10px'}}>垂直 boxV</div>
            <div className='box boxV' style={{height:'300px'}}>
                <div className="flex1" style={{backgroundColor:'red'}}>flex1</div>
                <div className="flex2" style={{backgroundColor:'orange'}}>flex2</div>
                <div className="flex3" style={{backgroundColor:'green'}}>flex3</div>
                <div style={{height:'100px',backgroundColor:'yellow'}}>固定100px,其它平分剩余空间</div>
            </div>

            <div className='box boxC boxV' style={bg}>
                <div className="flex_start" style={block}>单独靠前</div>
                <div style={block}>上下左右居中</div>
                <div className="flex_end" style={block}>单独靠后</div>
            </div>

            <div className='box boxC boxH' style={bg}>
                <div className="flex_start" style={block}>单独靠前</div>
                <div style={block}>上下左右居中</div>
                <div className="flex_end" style={block}>单独靠后</div>
            </div>

            <div className='box boxC' style={bg}>
                <div style={block}>上下左右居中</div>
            </div>

            <div className='box boxC' style={bg}>
                <div className="flex_end" style={block}>下居中</div>
            </div>

            

            <div className='box boxC' style={bg}>
                <div className="flex_start" style={block}>上居中</div>
            </div>


            <div className='box boxC boxV' style={bg}>
                <div className="flex_end" style={block}>右居中</div>
            </div>

            <div className='box boxC boxV' style={bg}>
                <div className="flex_start" style={block}>左居中</div>
            </div>

            <div className='box' style={bg}>
                <div className="flex_start" style={block}>左上</div>
            </div>

            <div className='box boxV' style={bg}>
                <div className="flex_end" style={block}>右上</div>
            </div>

            <div className='box' style={bg}>
                <div className="flex_end" style={block}>左下</div>
            </div>

            <div className='box boxH' style={bg}>
                <div className="flex1"></div>
                <div className="flex_end" style={block}>右下</div>
            </div>

      </div>
    );
  }
}

module.exports = Layout