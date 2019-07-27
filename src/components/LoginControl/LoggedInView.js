import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'

const LoggedIn = ({ logout, picture, userName }) => {
  const classes = styles()

  return (
    <>
      <div className={classes.loggedInWrapper}>
        <span>{`${userName}`}</span>
        <img className={classes.pic} src={picture} alt="" />
      </div>
      <Button
        variant="contained"
        color="default"
        onClick={logout}
      >
        Log Out
      </Button>
    </>
  )
}

export default LoggedIn
