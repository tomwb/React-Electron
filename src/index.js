import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './styles/main.scss'
import './routes'
import store from './store'
import { App } from './components'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)