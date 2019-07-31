import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import styles from './styles'

const LoggedIn = ({ logout, picture, userName }) => {
  const classes = styles()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.iconButton}
      >
        {
          (picture && <img className={classes.pic} src={picture} alt="" />)
          || <AccountCircle />
        }
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.userMenu}>
          <div className={classes.userName}>{`${userName}`}</div>
          <MenuItem onClick={() => null}>Profile</MenuItem>
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </div>
      </Menu>
    </>
  )
}

export default LoggedIn
