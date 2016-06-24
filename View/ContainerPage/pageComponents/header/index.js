import React from 'react'
import {
    Link
} from 'react-router'

import Menu from '../../../Components/menu'
import Dropdown from '../../../Components/dropdown'
import Icon from '../../../Components/icon'

require('./style.css')

const menu = (
    <Menu>
    <Menu.Item key="0">
      <Link to="/layout">Layout 布局</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/dialog">Dialog 对话框</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Link to="/menu">Menu 菜单</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
        <Link to="/table">Table 表格</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
        <Link to="/tip">Tip 汽泡文字提示</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
        <Link to="/tab">Tab 标签页</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="6">
        <Link to="/form">Form 表单</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="7">
        <Link to="/button">Button 按钮</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="8">
        <Link to="/icon">Icon 图标</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="9">
        <Link to="/checkbox">Checkbox 多选框</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="10">
        <Link to="/ant">更多组件</Link>
    </Menu.Item>
  </Menu>
);



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {}
    componentWillMount() {}
    render() {
        return (
            <div id="header" className="box boxH" style={{minHeight: '60px'}}>
                <p><Link to="/" style={{color:'#fff'}}>YSMC-React前端开发框架</Link></p>
                <div className="flex1"></div>
                <div className="mR10 link">
                    <Link to='/' className="mR10 mL10">首页</Link>
                    <Link to='/overview' className="mR10 mL10">概述</Link>
                    <Link to='/guide' className="mR10 mL10">开发指导</Link>
                    <Link to='/start-from-scratch' className="mR10 mL10">安装</Link>
                    <Link to='/start' className="mR10 mL10">快速上手</Link>
                    <Link to='/release' className="mR10 mL10">发布</Link>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link mR10 mL10" href="#">
                              基础组件 <Icon type="down" />
                            </a>
                        </Dropdown>
                </div>


            </div>
        );
    }
}

module.exports = Header

// import React from 'react'
// import {
//     Link
// } from 'react-router'

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     componentDidMount() {}
//     componentWillMount() {}
//     render() {
//         return ();
//     }
// }

// module.exports = Header



// const {
//   ajaxData,
//   ajaxSucceed,
//   ajaxFailed
// } = this.props;

// ajaxData({
//     url: 'getInfo',
//     method: 'post',
//     succeed: ajaxSucceed,
//     failed: ajaxFailed
// })
//post body: '{"f_supplier":10,"f_supplier_base":12,"sp_gid":1}',
//get body: 'f_supplier=10&f_supplier_base=12&sp_gid=1',



// this.userInfo = this.props.data.FetchData[0]['getInfo'];