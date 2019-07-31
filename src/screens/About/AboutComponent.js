import React from 'react'

import styles from './styles'

const AboutComponent = () => {
  const classes = styles()

  return (
    <div className={classes.about}>
      <p>This is a SPA skeleton builed using React, Redux, Webpack4, Material-UI and node w/express for the server.</p>
      <p>SSR includes material-ui styles and redux initial state.</p>
      <p>Authentication using Auth0 is integrated and can be used optionally.</p>
    </div>
  )
}

export default AboutComponent
