import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../../src/App'

export default (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>,
  )

  // render the index template with the rendered React markup.
  return res.render('index.html', { markup })
}
