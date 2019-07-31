import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { getServerInfo } from '../../services'

import styles from './styles'

const HomeComponent = () => {
  const [message, setMessage] = useState('')

  const classes = styles()

  const onButtonClick = async () => {
    const serverInfo = await getServerInfo()

    return setMessage(serverInfo)
  }

  return (
    <div className={classes.home}>
      <Button className={classes.button} onClick={onButtonClick}>Fetch Server Info</Button>
      {message && <div className={classes.message}>{message}</div>}
    </div>
  )
}

export default HomeComponent
