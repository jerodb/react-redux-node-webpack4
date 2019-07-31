import React from 'react'
import Activity from '../Activity'
import LoggedIn from './LoggedInView'
import LoggedOut from './LoggedOutView'
import styles from './styles'

export default ({
  isLoggedIn, login, logout, picture, userName
}) => {
  let Template

  const classes = styles()

  if (picture && userName) {
    Template = () => (
      <LoggedIn
        logout={logout}
        picture={picture}
        userName={userName}
      />
    )
  } else if (isLoggedIn) {
    Template = () => <div className={classes.activity}><Activity /></div>
  } else {
    Template = () => <LoggedOut login={login} />
  }

  return (
    <div className={classes.container}>
      <Template />
    </div>
  )
}
