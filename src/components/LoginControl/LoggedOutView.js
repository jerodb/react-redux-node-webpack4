import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'

const LoggedOut = ({ login }) => {
  const classes = styles()

  return (
    <>
      <Button
        className={classes.login}
        color="primary"
        onClick={login}
        variant="contained"
      >
      Log In
      </Button>
    </>
  )
}
export default LoggedOut
