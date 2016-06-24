import React from 'react'
import {
  Link
} from 'react-router'
import Icon from '../../Components/icon';

import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

class IconCom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    componentDidMount() {}
    componentWillMount() {}
    render() {
        const actionClass = {
          paddingLeft: '20px',
          lineHeight: '35px'
        }
        return (
            <div>
          <h1>Icon图标</h1>

          <div className='codeBox'>
              <Icon className="mT10 mR10" type="step-backward" />
              <Icon className="mT10 mR10" type="link" />
              <Icon className="mT10 mR10" type="step-forward" />
              <Icon className="mT10 mR10" type="caret-down" />
              <Icon className="mT10 mR10" type="step-forward" />
              <Icon type="delete" />
              <div className="codeView">
                  <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                      <Panel header={'查看代码'} key="1">
                          <div className="code">
                              import Icon from '../../Components/icon';<br />
                              &lt;Icon type="step-backward" /&gt;<br />
                              &lt;Icon type="link" /&gt;<br />
                              &lt;Icon type="step-forward" /&gt;<br />
                              &lt;Icon type="caret-down" /&gt;<br />
                              &lt;Icon type="step-forward" /&gt;<br />
                              &lt;Icon type="delete" /&gt;<br />
                              &lt;Icon type="delete" /&gt;
                          </div>
                      </Panel>
                  </Collapse>
              </div>
          </div>


          <h3 style={{backgroundColor:'#ececec',margin:'40px 0 10px 0',padding:'10px'}}>type值：</h3>
          <div className="box boxH">
                <div className="flex1">
                    方向性图标
                </div>
                <div className="flex1">
                    提示建议性图标
                </div>
                <div className="flex1">
                    网站通用图标
                </div>
          </div>

          <div className="box boxH">

                    <ul className="flex1">
                            <li>
                                  <Icon type="step-backward" />
                                  <span style={actionClass}>step-backward</span>
                            </li>

                            <li>
                                  <Icon type="step-forward" />
                                  <span style={actionClass}>step-forward</span>
                            </li>

                            <li>
                                  <Icon type="fast-backward" />
                                  <span style={actionClass}>fast-backward</span>
                            </li>

                            <li>
                                  <Icon type="fast-forward" />
                                  <span style={actionClass}>fast-forward</span>
                            </li>

                            <li>
                                  <Icon type="shrink" />
                                  <span style={actionClass}>shrink</span>
                            </li>

                            <li>
                                  <Icon type="arrow-salt" />
                                  <span style={actionClass}>arrow-salt</span>
                            </li>

                            <li>
                                  <Icon type="down" />
                                  <span style={actionClass}>down</span>
                            </li>

                            <li>
                                  <Icon type="up" />
                                  <span style={actionClass}>up</span>
                            </li>

                            <li>
                                  <Icon type="left" />
                                  <span style={actionClass}>left</span>
                            </li>

                            <li>
                                  <Icon type="right" />
                                  <span style={actionClass}>right</span>
                            </li>

                            <li>
                                  <Icon type="caret-down" />
                                  <span style={actionClass}>caret-down</span>
                            </li>

                            <li>
                                  <Icon type="caret-up" />
                                  <span style={actionClass}>caret-up</span>
                            </li>

                            <li>
                                  <Icon type="caret-left" />
                                  <span style={actionClass}>caret-left</span>
                            </li>

                            <li>
                                  <Icon type="caret-right" />
                                  <span style={actionClass}>caret-right</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-right" />
                                  <span style={actionClass}>caret-circle-right</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-left" />
                                  <span style={actionClass}>caret-circle-left</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-o-right" />
                                  <span style={actionClass}>caret-circle-o-right</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-o-left" />
                                  <span style={actionClass}>caret-circle-o-left</span>
                            </li>

                            <li>
                                  <Icon type="circle-right" />
                                  <span style={actionClass}>circle-right</span>
                            </li>

                            <li>
                                  <Icon type="circle-left" />
                                  <span style={actionClass}>circle-left</span>
                            </li>

                            <li>
                                  <Icon type="circle-o-right" />
                                  <span style={actionClass}>circle-o-right</span>
                            </li>

                            <li>
                                  <Icon type="circle-o-left" />
                                  <span style={actionClass}>circle-o-left</span>
                            </li>

                            <li>
                                  <Icon type="double-right" />
                                  <span style={actionClass}>double-right</span>
                            </li>

                            <li>
                                  <Icon type="double-left" />
                                  <span style={actionClass}>double-left</span>
                            </li>

                            <li>
                                  <Icon type="verticle-right" />
                                  <span style={actionClass}>verticle-right</span>
                            </li>

                            <li>
                                  <Icon type="verticle-left" />
                                  <span style={actionClass}>verticle-left</span>
                            </li>

                            <li>
                                  <Icon type="forward" />
                                  <span style={actionClass}>forward</span>
                            </li>

                            <li>
                                  <Icon type="backward" />
                                  <span style={actionClass}>backward</span>
                            </li>

                            <li>
                                  <Icon type="rollback" />
                                  <span style={actionClass}>rollback</span>
                            </li>

                            <li>
                                  <Icon type="enter" />
                                  <span style={actionClass}>enter</span>
                            </li>

                            <li>
                                  <Icon type="retweet" />
                                  <span style={actionClass}>retweet</span>
                            </li>

                            <li>
                                  <Icon type="swap" />
                                  <span style={actionClass}>swap</span>
                            </li>

                            <li>
                                  <Icon type="swap-left" />
                                  <span style={actionClass}>swap-left</span>
                            </li>

                            <li>
                                  <Icon type="swap-right" />
                                  <span style={actionClass}>swap-right</span>
                            </li>

                            <li>
                                  <Icon type="arrow-right" />
                                  <span style={actionClass}>arrow-right</span>
                            </li>

                            <li>
                                  <Icon type="arrow-up" />
                                  <span style={actionClass}>arrow-up</span>
                            </li>

                            <li>
                                  <Icon type="arrow-down" />
                                  <span style={actionClass}>arrow-down</span>
                            </li>

                            <li>
                                  <Icon type="arrow-left" />
                                  <span style={actionClass}>arrow-left</span>
                            </li>

                            <li>
                                  <Icon type="play-circle" />
                                  <span style={actionClass}>play-circle</span>
                            </li>

                            <li>
                                  <Icon type="play-circle-o" />
                                  <span style={actionClass}>play-circle-o</span>
                            </li>

                            <li>
                                  <Icon type="circle-up" />
                                  <span style={actionClass}>circle-up</span>
                            </li>

                            <li>
                                  <Icon type="circle-down" />
                                  <span style={actionClass}>circle-down</span>
                            </li>

                            <li>
                                  <Icon type="circle-o-up" />
                                  <span style={actionClass}>circle-o-up</span>
                            </li>

                            <li>
                                  <Icon type="circle-o-down" />
                                  <span style={actionClass}>circle-o-down</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-o-up" />
                                  <span style={actionClass}>caret-circle-o-up</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-o-down" />
                                  <span style={actionClass}>caret-circle-o-down</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-up" />
                                  <span style={actionClass}>caret-circle-up</span>
                            </li>

                            <li>
                                  <Icon type="caret-circle-down" />
                                  <span style={actionClass}>caret-circle-down</span>
                            </li>
                    </ul>

                    <ul className="flex1">
                          <li>
                                <Icon type="question" />
                                <span style={actionClass}>question</span>
                          </li>

                          <li>
                                <Icon type="question-circle-o" />
                                <span style={actionClass}>question-circle-o</span>
                          </li>

                          <li>
                                <Icon type="question-circle" />
                                <span style={actionClass}>question-circle</span>
                          </li>

                          <li>
                                <Icon type="plus" />
                                <span style={actionClass}>plus</span>
                          </li>

                          <li>
                                <Icon type="plus-circle-o" />
                                <span style={actionClass}>plus-circle-o</span>
                          </li>

                          <li>
                                <Icon type="plus-circle" />
                                <span style={actionClass}>plus-circle</span>
                          </li>

                          <li>
                                <Icon type="pause" />
                                <span style={actionClass}>pause</span>
                          </li>

                          <li>
                                <Icon type="pause-circle-o" />
                                <span style={actionClass}>pause-circle-o</span>
                          </li>

                          <li>
                                <Icon type="pause-circle" />
                                <span style={actionClass}>pause-circle</span>
                          </li>

                          <li>
                                <Icon type="minus" />
                                <span style={actionClass}>minus</span>
                          </li>

                          <li>
                                <Icon type="minus-circle-o" />
                                <span style={actionClass}>minus-circle-o</span>
                          </li>

                          <li>
                                <Icon type="minus-circle" />
                                <span style={actionClass}>minus-circle</span>
                          </li>

                          <li>
                                <Icon type="plus-square" />
                                <span style={actionClass}>plus-square</span>
                          </li>

                          <li>
                                <Icon type="minus-square" />
                                <span style={actionClass}>minus-square</span>
                          </li>

                          <li>
                                <Icon type="info" />
                                <span style={actionClass}>info</span>
                          </li>

                          <li>
                                <Icon type="info-circle-o" />
                                <span style={actionClass}>info-circle-o</span>
                          </li>

                          <li>
                                <Icon type="info-circle" />
                                <span style={actionClass}>info-circle</span>
                          </li>

                          <li>
                                <Icon type="exclamation" />
                                <span style={actionClass}>exclamation</span>
                          </li>

                          <li>
                                <Icon type="exclamation-circle-o" />
                                <span style={actionClass}>exclamation-circle-o</span>
                          </li>

                          <li>
                                <Icon type="exclamation-circle" />
                                <span style={actionClass}>exclamation-circle</span>
                          </li>

                          <li>
                                <Icon type="cross" />
                                <span style={actionClass}>cross</span>
                          </li>

                          <li>
                                <Icon type="cross-circle-o" />
                                <span style={actionClass}>cross-circle-o</span>
                          </li>

                          <li>
                                <Icon type="cross-circle" />
                                <span style={actionClass}>cross-circle</span>
                          </li>

                          <li>
                                <Icon type="check" />
                                <span style={actionClass}>check</span>
                          </li>

                          <li>
                                <Icon type="check-circle-o" />
                                <span style={actionClass}>check-circle-o</span>
                          </li>

                          <li>
                                <Icon type="check-circle" />
                                <span style={actionClass}>check-circle</span>
                          </li>

                          <li>
                                <Icon type="clock-circle-o" />
                                <span style={actionClass}>clock-circle-o</span>
                          </li>

                          <li>
                                <Icon type="clock-circle" />
                                <span style={actionClass}>clock-circle</span>
                          </li>
                    </ul>


                    <ul className="flex1">
                          <li>
                                  <Icon type="lock" />
                                  <span style={actionClass}>lock</span>
                          </li>
                          <li>
                                  <Icon type="unlock" />
                                  <span style={actionClass}>unlock</span>
                          </li>
                          <li>
                                  <Icon type="android" />
                                  <span style={actionClass}>android</span>
                          </li>
                          <li>
                                  <Icon type="apple" />
                                  <span style={actionClass}>apple</span>
                          </li>
                          <li>
                                  <Icon type="area-chart" />
                                  <span style={actionClass}>area-chart</span>
                          </li>
                          <li>
                                  <Icon type="bar-chart" />
                                  <span style={actionClass}>bar-chart</span>
                          </li>
                          <li>
                                  <Icon type="bars" />
                                  <span style={actionClass}>bars</span>
                          </li>
                          <li>
                                  <Icon type="book" />
                                  <span style={actionClass}>book</span>
                          </li>
                          <li>
                                  <Icon type="calendar" />
                                  <span style={actionClass}>calendar</span>
                          </li>
                          <li>
                                  <Icon type="cloud" />
                                  <span style={actionClass}>cloud</span>
                          </li>
                          <li>
                                  <Icon type="cloud-download" />
                                  <span style={actionClass}>cloud-download</span>
                          </li>
                          <li>
                                  <Icon type="code" />
                                  <span style={actionClass}>code</span>
                          </li>
                          <li>
                                  <Icon type="copy" />
                                  <span style={actionClass}>copy</span>
                          </li>
                          <li>
                                  <Icon type="credit-card" />
                                  <span style={actionClass}>credit-card</span>
                          </li>
                          <li>
                                  <Icon type="delete" />
                                  <span style={actionClass}>delete</span>
                          </li>
                          <li>
                                  <Icon type="desktop" />
                                  <span style={actionClass}>desktop</span>
                          </li>
                          <li>
                                  <Icon type="download" />
                                  <span style={actionClass}>download</span>
                          </li>
                          <li>
                                  <Icon type="edit" />
                                  <span style={actionClass}>edit</span>
                          </li>
                          <li>
                                  <Icon type="ellipsis" />
                                  <span style={actionClass}>ellipsis</span>
                          </li>
                          <li>
                                  <Icon type="file" />
                                  <span style={actionClass}>file</span>
                          </li>
                          <li>
                                  <Icon type="file-text" />
                                  <span style={actionClass}>file-text</span>
                          </li>
                          <li>
                                  <Icon type="file-unknown" />
                                  <span style={actionClass}>file-unknown</span>
                          </li>
                          <li>
                                  <Icon type="file-pdf" />
                                  <span style={actionClass}>file-pdf</span>
                          </li>
                          <li>
                                  <Icon type="file-excel" />
                                  <span style={actionClass}>file-excel</span>
                          </li>
                          <li>
                                  <Icon type="file-jpg" />
                                  <span style={actionClass}>file-jpg</span>
                          </li>
                          <li>
                                  <Icon type="file-ppt" />
                                  <span style={actionClass}>file-ppt</span>
                          </li>
                          <li>
                                  <Icon type="folder" />
                                  <span style={actionClass}>folder</span>
                          </li>
                          <li>
                                  <Icon type="folder-open" />
                                  <span style={actionClass}>folder-open</span>
                          </li>
                          <li>
                                  <Icon type="github" />
                                  <span style={actionClass}>github</span>
                          </li>
                          <li>
                                  <Icon type="hdd" />
                                  <span style={actionClass}>hdd</span>
                          </li>
                          <li>
                                  <Icon type="frown" />
                                  <span style={actionClass}>frown</span>
                          </li>
                          <li>
                                  <Icon type="meh" />
                                  <span style={actionClass}>meh</span>
                          </li>
                          <li>
                                  <Icon type="inbox" />
                                  <span style={actionClass}>inbox</span>
                          </li>
                          <li>
                                  <Icon type="laptop" />
                                  <span style={actionClass}>laptop</span>
                          </li>
                          <li>
                                  <Icon type="appstore-o" />
                                  <span style={actionClass}>appstore-o</span>
                          </li>
                          <li>
                                  <Icon type="appstore" />
                                  <span style={actionClass}>appstore</span>
                          </li>
                          <li>
                                  <Icon type="line-chart" />
                                  <span style={actionClass}>line-chart</span>
                          </li>
                          <li>
                                  <Icon type="link" />
                                  <span style={actionClass}>link</span>
                          </li>
                          <li>
                                  <Icon type="logout" />
                                  <span style={actionClass}>logout</span>
                          </li>
                          <li>
                                  <Icon type="mail" />
                                  <span style={actionClass}>mail</span>
                          </li>
                          <li>
                                  <Icon type="menu-fold" />
                                  <span style={actionClass}>menu-fold</span>
                          </li>
                          <li>
                                  <Icon type="menu-unfold" />
                                  <span style={actionClass}>menu-unfold</span>
                          </li>
                          <li>
                                  <Icon type="mobile" />
                                  <span style={actionClass}>mobile</span>
                          </li>
                          <li>
                                  <Icon type="notification" />
                                  <span style={actionClass}>notification</span>
                          </li>
                          <li>
                                  <Icon type="paper-clip" />
                                  <span style={actionClass}>paper-clip</span>
                          </li>
                          <li>
                                  <Icon type="picture" />
                                  <span style={actionClass}>picture</span>
                          </li>
                          <li>
                                  <Icon type="pie-chart" />
                                  <span style={actionClass}>pie-chart</span>
                          </li>
                          <li>
                                  <Icon type="poweroff" />
                                  <span style={actionClass}>poweroff</span>
                          </li>
                          <li>
                                  <Icon type="reload" />
                                  <span style={actionClass}>reload</span>
                          </li>
                          <li>
                                  <Icon type="search" />
                                  <span style={actionClass}>search</span>
                          </li>
                          <li>
                                  <Icon type="setting" />
                                  <span style={actionClass}>setting</span>
                          </li>
                          <li>
                                  <Icon type="share-alt" />
                                  <span style={actionClass}>share-alt</span>
                          </li>
                          <li>
                                  <Icon type="shopping-cart" />
                                  <span style={actionClass}>shopping-cart</span>
                          </li>
                          <li>
                                  <Icon type="smile" />
                                  <span style={actionClass}>smile</span>
                          </li>
                          <li>
                                  <Icon type="tablet" />
                                  <span style={actionClass}>tablet</span>
                          </li>
                          <li>
                                  <Icon type="tag" />
                                  <span style={actionClass}>tag</span>
                          </li>
                          <li>
                                  <Icon type="tags" />
                                  <span style={actionClass}>tags</span>
                          </li>
                          <li>
                                  <Icon type="to-top" />
                                  <span style={actionClass}>to-top</span>
                          </li>
                          <li>
                                  <Icon type="upload" />
                                  <span style={actionClass}>upload</span>
                          </li>
                          <li>
                                  <Icon type="user" />
                                  <span style={actionClass}>user</span>
                          </li>
                          <li>
                                  <Icon type="video-camera" />
                                  <span style={actionClass}>video-camera</span>
                          </li>
                          <li>
                                  <Icon type="windows" />
                                  <span style={actionClass}>windows</span>
                          </li>
                          <li>
                                  <Icon type="ie" />
                                  <span style={actionClass}>ie</span>
                          </li>
                          <li>
                                  <Icon type="chrome" />
                                  <span style={actionClass}>chrome</span>
                          </li>
                          <li>
                                  <Icon type="home" />
                                  <span style={actionClass}>home</span>
                          </li>
                          <li>
                                  <Icon type="loading" />
                                  <span style={actionClass}>loading</span>
                          </li>
                          <li>
                                  <Icon type="smile-circle" />
                                  <span style={actionClass}>smile-circle</span>
                          </li>
                          <li>
                                  <Icon type="meh-circle" />
                                  <span style={actionClass}>meh-circle</span>
                          </li>
                          <li>
                                  <Icon type="frown-circle" />
                                  <span style={actionClass}>frown-circle</span>
                          </li>
                          <li>
                                  <Icon type="tags-o" />
                                  <span style={actionClass}>tags-o</span>
                          </li>
                          <li>
                                  <Icon type="tag-o" />
                                  <span style={actionClass}>tag-o</span>
                          </li>
                          <li>
                                  <Icon type="cloud-upload-o" />
                                  <span style={actionClass}>cloud-upload-o</span>
                          </li>
                          <li>
                                  <Icon type="cloud-download-o" />
                                  <span style={actionClass}>cloud-download-o</span>
                          </li>
                          <li>
                                  <Icon type="cloud-upload" />
                                  <span style={actionClass}>cloud-upload</span>
                          </li>
                          <li>
                                  <Icon type="cloud-o" />
                                  <span style={actionClass}>cloud-o</span>
                          </li>
                          <li>
                                  <Icon type="star-o" />
                                  <span style={actionClass}>star-o</span>
                          </li>
                          <li>
                                  <Icon type="star" />
                                  <span style={actionClass}>star</span>
                          </li>
                          <li>
                                  <Icon type="heart-o" />
                                  <span style={actionClass}>heart-o</span>
                          </li>
                          <li>
                                  <Icon type="heart" />
                                  <span style={actionClass}>heart</span>
                          </li>
                          <li>
                                  <Icon type="environment" />
                                  <span style={actionClass}>environment</span>
                          </li>
                          <li>
                                  <Icon type="environment-o" />
                                  <span style={actionClass}>environment-o</span>
                          </li>
                          <li>
                                  <Icon type="eye" />
                                  <span style={actionClass}>eye</span>
                          </li>
                          <li>
                                  <Icon type="eye-o" />
                                  <span style={actionClass}>eye-o</span>
                          </li>
                          <li>
                                  <Icon type="camera" />
                                  <span style={actionClass}>camera</span>
                          </li>
                          <li>
                                  <Icon type="camera-o" />
                                  <span style={actionClass}>camera-o</span>
                          </li>
                          <li>
                                  <Icon type="aliwangwang" />
                                  <span style={actionClass}>aliwangwang</span>
                          </li>
                          <li>
                                  <Icon type="aliwangwang-o" />
                                  <span style={actionClass}>aliwangwang-o</span>
                          </li>
                          <li>
                                  <Icon type="save" />
                                  <span style={actionClass}>save</span>
                          </li>
                          <li>
                                  <Icon type="team" />
                                  <span style={actionClass}>team</span>
                          </li>
                          <li>
                                  <Icon type="solution" />
                                  <span style={actionClass}>solution</span>
                          </li>
                          <li>
                                  <Icon type="phone" />
                                  <span style={actionClass}>phone</span>
                          </li>
                          <li>
                                  <Icon type="filter" />
                                  <span style={actionClass}>filter</span>
                          </li>
                          <li>
                                  <Icon type="exception" />
                                  <span style={actionClass}>exception</span>
                          </li>
                          <li>
                                  <Icon type="export" />
                                  <span style={actionClass}>export</span>
                          </li>
                          <li>
                                  <Icon type="customerservice" />
                                  <span style={actionClass}>customerservice</span>
                          </li>
                          <li>
                                  <Icon type="qrcode" />
                                  <span style={actionClass}>qrcode</span>
                          </li>
                          <li>
                                  <Icon type="scan" />
                                  <span style={actionClass}>scan</span>
                          </li>
                          <li>
                                  <Icon type="like" />
                                  <span style={actionClass}>like</span>
                          </li>
                          <li>
                                  <Icon type="dislike" />
                                  <span style={actionClass}>dislike</span>
                          </li>
                          <li>
                                  <Icon type="message" />
                                  <span style={actionClass}>message</span>
                          </li>
                          <li>
                                  <Icon type="pay-circle" />
                                  <span style={actionClass}>pay-circle</span>
                          </li>
                          <li>
                                  <Icon type="pay-circle-o" />
                                  <span style={actionClass}>pay-circle-o</span>
                          </li>
                          <li>
                                  <Icon type="calculator" />
                                  <span style={actionClass}>calculator</span>
                          </li>
                          <li>
                                  <Icon type="pushpin" />
                                  <span style={actionClass}>pushpin</span>
                          </li>
                          <li>
                                  <Icon type="pushpin-o" />
                                  <span style={actionClass}>pushpin-o</span>
                          </li>
                    </ul>


          </div>
      }



      < /div>
    );
  }
}

module.exports = IconCom