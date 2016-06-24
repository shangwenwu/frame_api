import React from 'react'
import {
  Link
} from 'react-router'

var ReactMarkdown = require('react-markdown');
var source1 = "````\nnpm run build\n";


class Release extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div>
          <h1>发布</h1>

          <h3>一、打包</h3>
          <div>
              <p>生成dist/build.js</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source1} />
                  </div>
              </div>
          </div>

          <h3>二、需要部署的目录</h3>
          <div>
              <p>
                  images 图片文件<br />
                  lib 类库及打包的压缩文件<br />
                  index.html 入口文件
              </p>
          </div>

      </div>
    );
  }
}

module.exports = Release