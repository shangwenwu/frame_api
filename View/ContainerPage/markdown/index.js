/*
 * Markdown文档加载器
 *
 * 整站构建时，docs下的markdown文档会处理成jsonml格式
 * 通过 'bisheng.data' 这个约定的模块名字获取全部文档数据
 * 在浏览器端，将jsonml转换为react组件渲染到页面上
 *
 * 原理完全参考支付宝Antd工具链中的bisheng(https://github.com/benjycui/bisheng)
 */
import React from 'react'
import { Link } from 'react-router'

//这两个模块在bisheng的依赖中已经安装了，直接用了
import toReactComponent from 'jsonml-to-react-component'
import { getChildren } from 'jsonml.js/lib/utils';

import exist from 'exist.js'
import chain from 'ramda/src/chain'

//在webpack配置中约定的名字
import bisheng_data from './bisheng.data'

console.log('All markdown docs: ', bisheng_data);

const converters = chain((plugin) => plugin.converters || [], bisheng_data.plugins);

//markdown样式
require('./style.less');
//代码高亮prism-theme
require('./prism-theme-Ateliersulphurpool-light.css');

export default class MarkdownDocument extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.fetchRightDoc(props);
    }

    fetchRightDoc(props){
        let {location} = props;
        let doc = exist.get(bisheng_data.markdown, 'docs' + location.pathname.replace(/\//g, '.'));
        if(!doc){
            //TODO: GOTO 404
        }
    
        return {doc};
    }

    componentWillReceiveProps(nextProps){
        console.log('will ReceiveProps', location.pathname);

        this.setState( this.fetchRightDoc(nextProps) );
    }

    render() {

        let { doc } = this.state;
        let { meta } = doc;
        let { title, english, subtitle, chinese } = meta;
        
        return (
            <article className="markdown">

                <h1>
                  {title || english}
                  {
                    (!subtitle && !chinese) ? null :
                      <span className="subtitle">{subtitle || chinese}</span>
                  }
                </h1>
                
                {
                  toReactComponent(
                    ['section', { className: 'markdown' }].concat(getChildren(doc.content)),
                    converters
                  )
                }
                {/*<div dangerouslySetInnerHTML={{__html: html_content}}></div>*/}
                
            </article>
        )
    }
}

