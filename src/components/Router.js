import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../routes'

// Service that scrolls view to top when changing route.
function Services(props) {
  const { location } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

const Router = () => (
  <div>
    <Route component={Services} />
    <Switch>
      {routes.map(({
        key, path, exact = false, Comp,
      }) => (
        <Route
          key={key}
          exact={exact}
          path={path}
          render={({ location }) => <Comp location={location} />}
        />
      ))}
      )
    </Switch>
  </div>
)

export default Router
