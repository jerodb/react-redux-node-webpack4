import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import routes from '../routes'

class Services extends React.Component {
  componentDidUpdate(prevProps) {
    this.ScrollToTop(prevProps.location)
  }

  ScrollToTop(prevLocation) {
    const { location } = this.props
    // eslint-disable-next-line no-undef
    if (location !== prevLocation) window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const Router = () => (
  <div>
    <Route component={Services} />
    <Switch>
      {routes.map(({
        key, path, exact = false, Comp,
      }) => <Route key={key} exact={exact} path={path} component={Comp} />)}
      )
    </Switch>
  </div>
)

Services.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Router
