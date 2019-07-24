import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { createGenerateClassName } from '@material-ui/styles'
import fs from 'fs'
import path from 'path'
import App from '../../src/components/App'

export default (req, res) => {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry()

  // Create a sheetsManager instance.
  const sheetsManager = new Map()

  // Create a new class name generator.
  const generateClassName = createGenerateClassName()

  // Create Material UI theme
  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  })

  // Render component to string.
  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider sheetsManager={sheetsManager} theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>,
  )

  // Grab the CSS from our sheetsRegistry.
  const styles = sheetsRegistry.toString()

  const template = path.join(__dirname, '..', '..', 'dist', 'index.html')

  // Loads template
  fs.readFile(template, 'utf8', (err, data) => {
    if (err) throw err

    // Inserts the rendered React HTML and styles.
    const document = data
      .replace('<div id="app"></div>', `<div id="app">${markup}</div>`)
      .replace('<styles id="jss-server-side"></styles>', `<styles id="jss-server-side">${styles}</styles>`)

    // Sends html with the rendered React markup and styles.
    return res.send(document)
  })

  // render the index template with the rendered React HTML and styles.
  // return res.render('index', { markup, styles })
}
