import React from 'react'
import Activity from '../Activity'
import LoggedIn from './LoggedInView'
import LoggedOut from './LoggedOutView'
import styles, { activityStyles } from './styles'

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
    Template = () => <Activity styles={activityStyles} />
  } else {
    Template = () => <LoggedOut login={login} />
  }

  return (
    <div className={classes.container}>
      <Template />
    </div>
  )
}
