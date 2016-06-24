import React from 'react'
import {
  Link
} from 'react-router'

import Button from '../../Components/button';
import Collapse from '../../Components/collapse';
import Icon from '../../Components/icon';
const Panel = Collapse.Panel;
const ButtonGroup = Button.Group;

var ReactMarkdown = require('react-markdown');
var input = '````javascript\ngetInitialState() {\n  return {\n    loading: false,\n    iconLoading: false,\n  };\n},\nenterLoading() {\n  this.setState({ loading: true });\n},\nenterIconLoading() {\n  this.setState({ iconLoading: true });\n}\n' +
  '<Button type="primary" loading>Loading</Button>\n' +
  '<Button type="primary" size="small" loading>Loading</Button>\n' +
  '<Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>\n' +
  '<Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me!</Button>';


class ButtonCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
    }
  }
  enterLoading() {
    this.setState({
      loading: true
    });
  }
  enterIconLoading() {
    this.setState({
      iconLoading: true
    });
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div>
          <h1>Button 按钮</h1>
          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>
                        <Button type="primary" className="mR10">Primary</Button>
                        <Button className="mR10">Default</Button>
                        <Button type="ghost" className="mR10">Ghost</Button>
                        <Button type="dashed" className="mR10">Dashed</Button>
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                        import Button from '../../Components/button';<br />
                                        &lt;Button type="primary"&gt;Primary&lt;/Button&gt;<br />
                                        &lt;Button&gt;Default&lt;/Button&gt;<br />
                                        &lt;Button type="ghost"&gt;Ghost&lt;/Button&gt;<br />
                                        &lt;Button type="dashed"&gt;Dashed&lt;/Button&gt;
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>

                  <div className='codeBox'>
                      <Button type="primary" className="mR10"  size="large">Large</Button>
                      <Button type="primary" className="mR10"  >Default</Button>
                      <Button type="primary" className="mR10"  size="small">Small</Button>
                      <div className="codeView">
                          <Collapse accordion style={{backgroundColor:'red'}}>
                              <Panel header={'查看代码'} key="1">
                                  <div className="code">
                                      import Button from '../../Components/button';<br />
                                      &lt;Button type="primary" size="large"&gt;Large&lt;/Button&gt;
                                      &lt;Button type="primary"&gt;Default&lt;/Button&gt;
                                      &lt;Button type="primary" size="small"&gt;Small&lt;/Button&gt;
                                  </div>
                              </Panel>
                          </Collapse>
                      </div>
                  </div>

                  <div className='codeBox'>
                      <Button type="primary" className="mR10" loading>
                        Loading
                      </Button>
                      <Button type="primary" className="mR10" size="small" loading>
                        Loading
                      </Button>
                      <br />
                      <Button type="primary" className="mR10 mT10" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
                        Click me!
                      </Button>
                      <Button type="primary"  className="mR10 mT10"  icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading.bind(this)}>
                        Click me!
                      </Button>
                      <div className="codeView">
                          <Collapse accordion style={{backgroundColor:'red'}}>
                              <Panel header={'查看代码'} key="1">
                                  <div className="code">
                                     <ReactMarkdown source={input} />

                                     

                                  </div>
                              </Panel>
                          </Collapse>
                      </div>
                  </div>


                  


              </div>

              <div className="flex1">
                  <div className='codeBox'>
                        <Button  className="mR10" type="primary" shape="circle" icon="search" />
                        <Button  className="mR10" type="primary" icon="search">搜索</Button>
                        <Button className="mR10" type="ghost" shape="circle-outline" icon="search" />
                        <Button className="mR10" type="ghost" icon="search">Search</Button>
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                        import Button from '../../Components/button';<br />
                                        &lt;Button type="primary" shape="circle" icon="search" /&gt;<br />
                                        &lt;Button type="primary" icon="search"&gt;搜索&lt;/Button&gt;<br />
                                        &lt;Button type="ghost" shape="circle-outline" icon="search" /&gt;<br />
                                        &lt;Button type="ghost" icon="search"&gt;Search&lt;/Button&gt;<br />
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>

                  <div className='codeBox'>
                        <Button className="mR10" type="primary">Primary</Button>
                        <Button className="mR10" type="primary" disabled>Primary(disabled)</Button>
                        <br />
                        <Button className="mR10 mT10">Default</Button>
                        <Button className="mR10 mT10" disabled>Default(disabled)</Button>
                        <br />
                        <Button className="mR10 mT10" type="ghost">Ghost</Button>
                        <Button className="mR10 mT10" type="ghost" disabled>Ghost(disabled)</Button>
                        <br />
                        <Button className="mR10 mT10" type="dashed">Dashed</Button>
                        <Button className="mR10 mT10" type="dashed" disabled>Dashed(disabled)</Button>
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                        import Button from '../../Components/button';<br />
                                        &lt;Button type="primary"&gt;Primary&lt;/Button&gt;<br />
                                        &lt;Button type="primary" disabled&gt;Primary(disabled)&lt;/Button&gt;<br />
                                        &lt;Button&gt;Default&lt;/Button&gt;<br />
                                        &lt;Button disabled&gt;Default(disabled)&lt;/Button&gt;<br />
                                        &lt;Button type="ghost"&gt;Ghost&lt;/Button&gt;<br />
                                        &lt;Button type="ghost" disabled&gt;Ghost(disabled)&lt;/Button&gt;<br />
                                        &lt;Button type="dashed"&gt;Dashed&lt;/Button&gt;<br />
                                        &lt;Button type="dashed" disabled&gt;Dashed(disabled)&lt;/Button&gt;
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>

                  <div className='codeBox'>
                        <h4>Basic</h4>
                        <ButtonGroup className="mR10">
                          <Button>Cancel</Button>
                          <Button type="primary">OK</Button>
                        </ButtonGroup>
                        <ButtonGroup  className="mR10">
                          <Button disabled>L</Button>
                          <Button disabled>M</Button>
                          <Button disabled>R</Button>
                        </ButtonGroup>
                        <ButtonGroup className="mR10">
                          <Button type="primary">L</Button>
                          <Button>M</Button>
                          <Button type="ghost">M</Button>
                          <Button type="dashed">R</Button>
                        </ButtonGroup>

                        <h4>With Icon</h4>
                        <ButtonGroup  className="mR10">
                          <Button type="primary">
                            <Icon type="left" />Go back
                          </Button>
                          <Button type="primary">
                            Go forward<Icon type="right" />
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup  className="mR10">
                          <Button type="primary" icon="cloud" />
                          <Button type="primary" icon="cloud-download" />
                        </ButtonGroup>

                        <h4>Size</h4>
                        <ButtonGroup size="large"  className="mR10">
                          <Button type="ghost">Large</Button>
                          <Button type="ghost">Large</Button>
                        </ButtonGroup>
                        <ButtonGroup  className="mR10">
                          <Button type="ghost">Default</Button>
                          <Button type="ghost">Default</Button>
                        </ButtonGroup>
                        <ButtonGroup size="small"  className="mR10">
                          <Button type="ghost">Small</Button>
                          <Button type="ghost">Small</Button>
                        </ButtonGroup>
                        <div className="codeView">
                            <Collapse accordion style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                        import Button from '../../Components/button';<br />
                                        import Icon from '../../Components/icon';<br />
                                        const ButtonGroup = Button.Group;<br />

                                        &lt;h4&gt;Basic&lt;/h4&gt;<br />
                                        &lt;ButtonGroup&gt;<br />
                                          &lt;Button&gt;Cancel&lt;/Button&gt;<br />
                                          &lt;Button type="primary"&gt;OK&lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />
                                        &lt;ButtonGroup&gt;<br />
                                          &lt;Button disabled&gt;L&lt;/Button&gt;<br />
                                          &lt;Button disabled&gt;M&lt;/Button&gt;<br />
                                          &lt;Button disabled&gt;R&lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />
                                        &lt;ButtonGroup&gt;<br />
                                          &lt;Button type="primary"&gt;L&lt;/Button&gt;<br />
                                          &lt;Button&gt;M&lt;/Button&gt;<br />
                                          &lt;Button type="ghost"&gt;M&lt;/Button&gt;<br />
                                          &lt;Button type="dashed"&gt;R&lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />

                                        &lt;h4&gt;With Icon&lt;/h4&gt;<br />
                                        &lt;ButtonGroup&gt;<br />
                                          &lt;Button type="primary"&gt;<br />
                                            &lt;Icon type="left" /&gt;Go back<br />
                                          &lt;/Button&gt;<br />
                                          &lt;Button type="primary"&gt;<br />
                                            Go forward&lt;Icon type="right" /&gt;<br />
                                          &lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />
                                        &lt;ButtonGroup&gt;<br />
                                          &lt;Button type="primary" icon="cloud" /&gt;<br />
                                          &lt;Button type="primary" icon="cloud-download" /&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />

                                        &lt;h4&gt;Size&lt;/h4&gt;<br />
                                        &lt;ButtonGroup size="large"&gt;<br />
                                          &lt;Button type="ghost"&gt;Large&lt;/Button&gt;<br />
                                          &lt;Button type="ghost"&gt;Large&lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />
                                        &lt;ButtonGroup&gt;<br />
                                          &lt;Button type="ghost"&gt;Default&lt;/Button&gt;<br />
                                          &lt;Button type="ghost"&gt;Default&lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;<br />
                                        &lt;ButtonGroup size="small"&gt;<br />
                                          &lt;Button type="ghost"&gt;Small&lt;/Button&gt;<br />
                                          &lt;Button type="ghost"&gt;Small&lt;/Button&gt;<br />
                                        &lt;/ButtonGroup&gt;
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

module.exports = ButtonCom