import React from 'react'
import {
  Link
} from 'react-router'
import Header from '../pageComponents/header'

// import Button from '../../Components/button';
require('./index.css')

class StartedCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div className="box boxV" style={{width:'100%'}}>
          <Header />
          <div className="box boxC boxH start_content flex1" style={{minHeight: '280px'}}>
              <div style={{textAlign:'center'}}>
                    <h1 style={{fontSize:'40px'}}>YSMC FE UI</h1>
                    <p className="mT20" style={{lineHeight:'24px'}}>云杉美菜前端UI<br/><span style={{fontSize:'16px'}}>此文档旨在制定、维护一套美菜内部通用的前端技术体系。</span><br /><span style={{fontSize:'20px'}}>前端工程化，应用更先进的设计理念和工具，实现Web端交互程序独立开发、维护（前后端分离）。</span><br />前端专业化，提高开发效率和产品体验。</p>
                    <div>
                        <Link to="/start">
                            <button type="button" className="btn btn-danger mR10">快速上手使用</button>
                        </Link>
                        <Link to="/start-from-scratch">
                            <button type="button" className="btn btn-danger mL10">初始项目下载</button>
                        </Link>
                    </div>
              </div>
          </div>
          <div className="flex1 box boxC boxH" style={{padding:'20px',minHeight: '300px',color:'#565656'}}>
              <div className="flex1 mL20 mR20" style={{minHeight: '300px'}}>
                  <h3 style={{color:'#25accf'}}>React</h3>
                  <p>数据变化后，React 概念上与点击“刷新”按钮类似，但仅会更新变化的部分；<br />React 都是关于构建可复用的组件。事实上，通过 React 你唯一要做的事情就是构建组件。得益于其良好的封装性，组件使代码复用、测试和关注分离更加简单。</p>
              </div>
              <div className="flex1 mL20 mR20"  style={{minHeight: '300px'}}>
                  <h3 style={{color:'#25accf'}}>Redux</h3>
                  <p>Redux是React的黄金搭档，做复杂交互的利器。<br />

简单描述React的工作原理：「由state控制组件的展示状态，用户操作导致state改变，完成交互」 面对复杂交互，需要多个组件相互协作，传递状态、同步改变……程序面临可维护性的难题！</p>
              </div>
              <div className="flex1 mL20 mR20"  style={{minHeight: '300px'}}>
                  <h3 style={{color:'#25accf'}}>Router</h3>
                  <p>一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。<br />在React构建的单页应用中，内容的切换完全是由浏览器中js控制的，我们通过「路由」的概念，来管理url跟具体内容的关系。</p>
              </div>
              <div className="flex1 mL20 mR20"  style={{minHeight: '300px'}}>
                  <h3 style={{color:'#25accf'}}>webpack</h3>
                  <p>
                    开发神器Webpack<br />
                    Webpack将项目中用到的一切静态资源都视之为模块，模块之间可以互相依赖。<br />
                    Webpack的目标就是对项目中的静态资源进行统一管理，为产品的最终发布提供最优的打包部署方案。
                  </p>
              </div>
              <div className="flex1 mL20 mR20"  style={{minHeight: '300px'}}>
                  <h3 style={{color:'#25accf'}}>Ant Design</h3>
                  <p>Ant Design 是一个致力于提升『用户』和『设计者』使用体验的中台设计语言，兼顾专业和非专业的设计人员，具有学习成本低、上手速度快、实现效果好等特点，并且提供从界面设计到前端开发的全链路生态，可以大大提升设计和开发的效率。</p>
              </div>
          </div>
          <div style={{textAlign:'center',lineHeight:'50px',backgroundColor:'#efefef',color:'#565656'}}>©2016 美菜-技术中心-采销部出品</div>
      </div>
    );
  }
}

module.exports = StartedCom