import React from 'react'

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as CounterActions from '../Action';
import {
  Link,
  IndexLink
} from 'react-router'

import Header from './pageComponents/header'


import Menu from '../Components/menu'
import Icon from '../Components/icon'


class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    }
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;

    return (
      <Menu theme="light" onClick={this.handleClick.bind(this)}
        style={{ width: 240,overflowY: 'auto',marginTop:'1px',fontSize:'20px',background:'none' }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <Menu.Item key="1"><Link to="/overview">概述</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/guide">开发指导</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/start-from-scratch">安装</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/start">快速上手</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/release">发布</Link></Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>组件</span></span>}>
              <Menu.Item key="7"><Link to="/layout">Layout 布局</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/dialog">Dialog 对话框</Link></Menu.Item>
              <Menu.Item key="12"><Link to="/menu">Menu 菜单</Link></Menu.Item>
              <Menu.Item key="13"><Link to="/table">Table 表格</Link></Menu.Item>
              <Menu.Item key="14"><Link to="/tip">Tip 汽泡文字提示</Link></Menu.Item>
              <Menu.Item key="15"><Link to="/tab">Tab 标签页</Link></Menu.Item>
              <Menu.Item key="16"><Link to="/form">Form 表单</Link></Menu.Item>

              <Menu.Item key="5"><Link to="/button">Button 按钮</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/icon">Icon图标</Link></Menu.Item>
              
              <Menu.Item key="8"><Link to="/checkbox">Checkbox 多选框</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/example">其它</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/ant">更多组件...</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
};

class Index extends React.Component {


  componentDidMount() {}

  render() {
    return (
      <div className="flex1 box boxV ">
          <Header />
          <div className="flex1 box boxH" >
              <div className="gradient"></div>
                  <Sider />
              <div className="flex1"  style={{padding:'30px 50px',overflowY: 'auto'}}>
                {React.cloneElement(this.props.children,{store:this.props})}
              </div>
          </div>
          
      </div>
    )
  }
}


const mapStateToProps = state => ({
  data: state
});
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);