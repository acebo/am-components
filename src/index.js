import React from 'react'
import ReactDOM from 'react-dom'
import browserHistory from 'react-router/lib/browserHistory'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'

import App from 'containers/App'
import DocumentList from 'containers/DocumentList/'

import 'styles/global.scss'

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path='/' component={App}>
   		<Route path='document' component={DocumentList} />
   </Route>
  </Router>
  , document.getElementById('root')
);
