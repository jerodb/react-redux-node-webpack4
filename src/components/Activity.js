import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { loading } from '../res/images'

const Activity = ({ styles }) => {
  const classes = makeStyles(styles)()

  return (
    <div className={classes.activity}>
      <img src={loading} alt="loading" />
    </div>
  )
}

export default Activity
