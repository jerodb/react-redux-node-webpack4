import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../components/Layout'
import routes from './routes'

// Service that scrolls view to top when changing route.
function Services({ location }) {
  useEffect(() => { window.scrollTo(0, 0) }, [location])
  return null
}

const Router = () => (
  <div>
    <Route component={Services} />
    <CssBaseline />
    <Switch>
      {routes.map(({
        Comp, exact, key, layout = false, path
      }) => (
        <Route
          path={path}
          key={key}
          exact={exact}
          render={
            ({ location }) => (
              layout ? <Layout Comp={Comp} /> : <Comp location={location} />
            )
          }
        />
      ))}
      )
    </Switch>
  </div>
)

export default Router
