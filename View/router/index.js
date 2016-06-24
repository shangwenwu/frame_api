import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import {
  Provider
} from 'react-redux'
import {
  Router,
  Route,
  IndexLink,
  browserHistory,
  hashHistory,
  Link,
  IndexRoute
} from 'react-router'
import {
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux'
import store from '../Reducers'

const history = syncHistoryWithStore(browserHistory, store)

const createHashHistory = require('history/lib/createHashHistory')


//引入页面 ContainerPage文件目录下的文件
import NoMatch from '../ContainerPage/error'
import Index from '../ContainerPage'
import Home from '../ContainerPage/home'
import Install from '../ContainerPage/install'
import Start from '../ContainerPage/start'
import Release from '../ContainerPage/release'
import Button from '../ContainerPage/button'
import Icon from '../ContainerPage/icon'
import Layout from '../ContainerPage/layout'
import Checkbox from '../ContainerPage/checkbox'
import Ant from '../ContainerPage/ant'
import Dialog from '../ContainerPage/dialog'
import Menu from '../ContainerPage/menu'
import Table from '../ContainerPage/table'

import Tip from '../ContainerPage/tip'
import Tab from '../ContainerPage/tabBox'
import Form from '../ContainerPage/form'

import Started from '../ContainerPage/started'


import Example from '../ContainerPage/example'


//李燚


//许可


//继成
import MarkdownDocument from '../ContainerPage/markdown'


// <IndexRoute  component={Home}/>
class RouterConfig extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Route path="/" >
                <IndexRoute component={Started} />
                <Route path="/docs"  component={Index}>
                  <IndexRoute component={Home} />

                  <Route path="/example"  component={Example} />

                  <Route path="/overview"  component={MarkdownDocument} />
                  <Route path="/start-from-scratch"  component={MarkdownDocument} />
                  <Route path="/guide"  component={MarkdownDocument} />
                  <Route path="/start"  component={Start} />
                  <Route path="/button"  component={Button} />
                  <Route path="/icon"  component={Icon} />
                  <Route path="/layout"  component={Layout} />
                  <Route path="/release"  component={Release} />

                  <Route path="/dialog"  component={Dialog} />
                  <Route path="/menu"  component={Menu} />
                  <Route path="/table"  component={Table} />
                  <Route path="/tip"  component={Tip} />
                  <Route path="/tab"  component={Tab} />
                  <Route path="/form"  component={Form} />

                  <Route path="/checkbox"  component={Checkbox} />
                  <Route path="/ant"  component={Ant} />

                  <Route path="*" component={NoMatch}/>
                </Route>
            </Route>
          </Router>
        </Provider>
    )
  }
}

module.exports = RouterConfig