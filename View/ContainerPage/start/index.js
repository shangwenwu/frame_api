import React from 'react'
import {
  Link
} from 'react-router'

var ReactMarkdown = require('react-markdown');
var source1 = "````\nimport React from 'react'\nimport {\n    Link\n} from 'react-router'\n\nclass Hello extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {}\n    }\n    componentDidMount() {}\n    componentWillMount() {}\n    render() {\n        return (\n            <div id='Hello'>\n               页面内容\n            </div>\n        );\n    }\n}\n\nmodule.exports = Hello\n";
var source2 = "````\n#Hello{\n\n}\n#Hello p{\n\n}\n#Hello div a span{\n\n}\n";
var source3 = "````\nrequire('./style.css')\n";
var source4 = "````\n//继成\nimport Hello from '../ContainerPage/hello'\n\n\n//李燚\n\n\n//许可\n\n\n//其它开发人员\n\n\n";
var source5 = '````\n<Route path="/hello"  component={Hello} />';
var source6 = '````\n<Link to="/hello">hello</Link>';
var source7 = "````\n'getInfo': url + '/passport/getInfo', // 后端开发人员 获取登录用户信息";
var source8 = "````\n//开发人员姓名：李继成\n  //后端接口返回的数据\n  'getInfo': { // 后端开发人员 获取登录用户信息\n  'ret': 1,\n  'data': {\n    'loginUrl': 'http://www.baidu.com',\n    'registerUrl': 'http://www.sina.com',\n    'phone': '刘海涛',\n    'passport_id': '844187'\n  },\n  'errmsg': '其它错误信息！'\n}\n\n  //前端post、get...数据\n  postA: {},\n  getB: {},\n\n \n \n//李燚\n  //后端接口返回的数据\n  //前端post、get...数据\n \n \n//许可\n  //后端接口返回的数据\n  //前端post、get...数据\n \n \n//其它开发人员\n  //后端接口返回的数据\n  //前端post、get...数据\n";
var source9 = "````\nrender() {\n    this.getInfo = this.props.store.data.FetchData[0]['getInfo'];  //引入数据\n    return (\n        <div id='Hello'>\n             {this.getInfo.data.phone} //渲染数据\n        </div>\n    );\n}\n";
var source10 = "````\nchangeData() {\n  this.getInfo.data.phone = '15982378290';\n  this.props.store.updateTodo(this.getInfo);\n}\n\nrender() {\n    this.getInfo = this.props.store.data.FetchData[0]['getInfo'];  //引入数据\n    return (\n        <div id='Hello' onClick={this.changeData}>\n             {this.getInfo.data.phone} //渲染数据\n        </div>\n    );\n}\n";
var source11 = "````\nimport Dialog from '../../Components/Dialog'";

var source12 = "````\n  componentDidMount() {\n    const {\n      ajaxData,\n      ajaxSucceed,\n      ajaxFailed\n    } = this.props;\n\n    ajaxData({\n        url: 'getInfo',\n        method: 'post',\n        succeed: ajaxSucceed,\n        failed: ajaxFailed\n      })\n  }\n";

var source13 = '````\n//post body: \'{"f_supplier":10,"f_supplier_base":12,"sp_gid":1}\',\n//get  body: \'f_supplier=10&f_supplier_base=12&sp_gid=1\',\n';



class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div>
          <h1>快速上手</h1>
          <p>
            YSMC-ui致力于提供给程序员愉悦的开发体验。在开始之前，推荐先学习 React 和 ES2015。
          </p>
          <p>
            示例：创建hello页面，只需要如下几个简单的步骤 ^_^  .....
          </p>

          <h3>一、创建页面</h3>
          <div>
              <p>在初始项目工程目录ContainerPage下新建hello目录，并在该目录下新建index.js</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source1} />
                     <p style={{fontSize:'18px'}}>约定："Hello"字样出现三次，1定义模块名称，2该模块的唯一ID，3输出该模块</p>
                  </div>
              </div>
          </div>

          <h3>二、添加样式</h3>
          <div>
              <p>1.在hello目录下新建style.css</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source2} />
                     <p style={{fontSize:'18px'}}>约定：每行css样式必须以"#Hello"开头，防止与其它样式冲突</p>
                  </div>
              </div>
              <p>2.在hello/index.js中引入</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source3} />
                     <p style={{fontSize:'18px'}}>约定：在import之后，class之前引入</p>
                  </div>
              </div>
          </div>

          <h3>三、添加路由</h3>
              <p>打开项目工程目录router下的index.js</p>
              <p>1.引入hello模块</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source4} />
                     <p style={{fontSize:'18px'}}>约定：添加工程师的姓名，以后该开发人员开发的模块，放到一块引入，方便管理。作为模块定义的变量'Hello'首字母必须大写</p>
                  </div>
              </div>
              <p>2.添加路由</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source5} />
                     <p style={{fontSize:'18px'}}>约定：path为url中的新路由名称，component为刚引入的模块变量</p>
                  </div>
              </div>
          
          <h3>四、在导航中添加link</h3>
              <p>在导航模块添加link链接; 或直接在地址栏输入hello跳转</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source6} />
                     <p>link类似a标签</p>
                  </div>
              </div>

          <p style={{backgroundColor:'#84cee1',color:'white',fontSize:'16px',padding:'10px'}}>soeasy，一个页面添加完成了 ~_~   ~_~   .....，下面一起来给页面加点数据吧！</p>
          <h3>五、添加Api</h3>
              <p>打开项目工程目录Api下的index.js，添加</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source7} />
                     <p style={{fontSize:'18px'}}>约定：key必须跟模拟数据的key保持一致；值为后端api接口地址；注释必须保留</p>
                  </div>
              </div>
          
          <h3>六、添加Api模拟数据 <span style={{color:'red'}}>模拟数据非常非常非常重要，需要提前定义，高度重视哦！</span></h3>
              <p>打开项目工程目录Config下的defaultData.js，添加</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source8} />
                     <p style={{fontSize:'18px'}}>约定：接口返回数据的key必须跟api数据的key保持一致；<br />值为后端返回数据，提前与后端开发约定返回格式，方便前端提前进入工作状态；<br />注释必须保留；<br />前端数据key由开发自行定义，前提是不能于其它key冲突</p>
                  </div>
              </div>

          
          <h3>七、引入数据并渲染数据</h3>
              <p>打开项目工程目录ContainerPage/hollo/index.js,render方法修改如下</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source9} />
                     <p style={{fontSize:'18px'}}>约定：页面结构的呈现是由数据来决定的；某DOM节点显示或隐藏，来改改数据试试吧！</p>
                  </div>
              </div>
          

          <h3>八、更新数据</h3>
              <p>绑定事件，添加更新方法</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source10} />
                     <p style={{fontSize:'18px'}}>约定：绑定事件，及数据传递时，注意this指向</p>
                  </div>
              </div>


          <p style={{backgroundColor:'#84cee1',color:'white',fontSize:'16px',padding:'10px'}}>soeasy soeasy  ~_~   ~_~   .....，引入各种组件，配置组件所需数据，开发完成。</p>

          <h3>九、引入组件</h3>
          <p>/hollo/index.js,在import代码下添加</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source11} />
                     <p style={{fontSize:'18px'}}>约定：import定义的变量必须提前定义，所以import引入的组件要在页面上边放一起哦！注意路径地址层级</p>
                  </div>
              </div>

          <h3>十、开发完成，准备打包时开启ajax请求</h3>
          <p>/hollo/index.js,在componentWillMount方法中添加</p>
              <div className="codeView mB20">
                  <div className="code">
                     <ReactMarkdown source={source12} />
                     <p style={{fontSize:'18px'}}>约定：当前页面所需的数据接口; 注意：url的值为api中的key</p>
                  </div>
              </div>
              <p>注意body数据格式</p>
              <div className="codeView mB20">
                  <div className="code">
                      <ReactMarkdown source={source13} />
                  </div>
              </div>
          
      </div>
    );
  }
}

module.exports = Start