import '@babel/polyfill'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './App'
import { BASE_URL, NODE_ENV } from '../config'

window.onload = () => {
  hydrate(
    <BrowserRouter basename={BASE_URL}>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  )

  if (NODE_ENV === 'development') module.hot.accept()
}
