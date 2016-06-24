import React from 'react'
import {
  Link
} from 'react-router'
import TableComponent from '../../Components/TableComponent'

import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

var ReactMarkdown = require('react-markdown');
var source1 = "````\nvar tableOption = {\n  head: [{\n    field: 'item_id',\n    text: '编号'\n  }, {\n    field: 'class1_name',\n    text: '一级分类名称'\n  }, {\n    field: 'sku_name',\n    text: '产品名称'\n  }, {\n    field: 'handle',\n    text: '操作',\n    callback: function(item) { \\特殊处理时添加Callback  \n      if (item.status == 9) {\n        return (<button type='button' className='btn btn-success'>驳回</button>)\n      } else {\n        return (<button type='button'  className='btn btn-success'>查看</button>)\n      }\n    }\n  }],\n  data: this.productList.data,\n}\n<TableComponent params={tableOption} changeData={this.changeData.bind(this)}/>\n";


class TableCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {
    this.ajaxData = this.props.store.ajaxData;
    this.ajaxSucceed = this.props.store.ajaxSucceed;
    this.ajaxFailed = this.props.store.ajaxFailed;
    this.updateTodo = this.props.store.updateTodo;
  }

  //改变table数据
  changeData(key, val) {
    //第一次初始化不表格
    var status = 0;
    if (key == 'status') {
      this.setState({
        status: val
      })
      status = val;
    } else {
      this.setState({
        status: 0
      });
    }

    var page = 1;
    if (key == 'page') {
      page = val;
    }

    //点击页码时改变的是静态数据，只为演示使用
    this.productList.data.page = page;
    this.updateTodo(this.productList)

    // 其它逻辑判断
    // if ($('#categorySelect').val()) {
    //     var sku_name = '';
    //     var item_id = '';
    //     var searchVal = $('#keyword').val();
    //     if (searchVal) {
    //         if (Number(searchVal)) {
    //             item_id = searchVal;
    //         } else {
    //             sku_name = searchVal;
    //         }
    //     }
    //     this.ajaxData({
    //         url: 'productList',
    //         method: 'post',
    //         body: '{"status":' + status + ',"base_id":"' + localStorage.base_id + '","shop_id":"' + localStorage.shop_id + '","sku_name":"' + sku_name + '","item_id":"' + item_id + '","page":' + page + ',"f_category":' + $('#categorySelect').val() + '}',
    //         succeed: this.ajaxSucceed,
    //         failed: this.ajaxFailed
    //     })
    // } else {
    //     this.productList.ret = 1212; //不渲染
    //     this.updateTodo(this.productList)
    // }

  }

  render() {
    //表格数据
    this.productList = this.props.store.data.FetchData[0].productList;
    var t = this;
    var tableOption = {
      head: [{
        field: 'item_id',
        text: '编号1111'
      }, {
        field: 'class1_name',
        text: '一级分类名称'
      }, {
        field: 'sku_name',
        text: '产品名称'
      }, {
        field: 'own_brand',
        text: '品牌12122121'
      }, {
        field: 'sku_level_name',
        text: '等级'
      }, {
        field: 'sku_format',
        text: '规格'
      }, {
        field: 'valuation_unit_name',
        text: '计价单位'
      }, {
        field: 'status',
        text: '状态'
      }, {
        field: 'handle',
        text: '操作',
        callback: function(item) {
          if (item.status == 9) {
            return (<button type="button" className="btn btn-success">驳回</button>)
          } else {
            return (<button type="button"  className="btn btn-success">查看</button>)
          }
        }
      }],
      data: this.productList.data,
    }
    return (
      <div>
          <h1>Menu 菜单</h1>
          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>
                        <TableComponent params={tableOption} changeData={this.changeData.bind(this)}/>
                        <div className="codeView">
                            <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">
                                       <p>数据设置</p>
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

module.exports = TableCom