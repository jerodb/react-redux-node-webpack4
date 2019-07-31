import React from 'react'
import NoSsr from '@material-ui/core/NoSsr'
import LoginControl from '../LoginControl'
import styles from './styles'

export default () => {
  const classes = styles()

  return (
    <div className={classes.container}>
      <div className={classes.logo} />
      <div className={classes.navBar}>
        <ul className={classes.nav}>
          <li className={classes.navBtn}>About</li>
        </ul>
        <div className={classes.loginControl}>
          <NoSsr><LoginControl /></NoSsr>
        </div>
      </div>
    </div>
  )
}
