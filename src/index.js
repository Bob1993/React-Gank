window.jQuery = window.$ = require('jquery')
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')
require('./css/main-frame.css')
import React from 'react'
import {render} from 'react-dom'

import App from './App'

render(<App/>, document.querySelector('#app'))
