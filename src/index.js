import '@babel/polyfill'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './App'

window.onload = () => {
  hydrate(
    <BrowserRouter basename={process.env.BASE_URL}>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  )

  if (process.env.NODE_ENV === 'development') module.hot.accept()
}
