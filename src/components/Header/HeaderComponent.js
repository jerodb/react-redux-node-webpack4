import React from 'react'
import NoSsr from '@material-ui/core/NoSsr'
import LoginControl from '../LoginControl'
import styles from './styles'

export default () => {
  const classes = styles()

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logo} />
        <div className={classes.nav}>
          <NoSsr><LoginControl /></NoSsr>
        </div>
      </div>
    </div>
  )
}
