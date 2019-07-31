import React from 'react'
import { connect } from 'react-redux'

import styles from './styles'

const ProfileComponent = ({ user }) => {
  const classes = styles()

  return (
    <div className={classes.profile}>
      <div>{ JSON.stringify(user) }</div>
    </div>
  )
}

export default connect(
  ({ user }) => ({ user })
)(ProfileComponent)
