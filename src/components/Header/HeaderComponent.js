import React from 'react'
import NoSsr from '@material-ui/core/NoSsr'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './styles'

export default () => {
  const classes = styles()

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo} />
          <div className={classes.sectionDesktop}>
            <ul className={classes.nav}>
              <li className={classes.navBtn}>About</li>
            </ul>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
