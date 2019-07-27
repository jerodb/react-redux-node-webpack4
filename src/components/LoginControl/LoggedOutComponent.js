import React from 'react'
import Button from '@material-ui/core/Button'

const LoggedOut = ({ login }) => (
  <>
    <Button
      variant="contained"
      color="secondary"
      onClick={login}
    >
      Log In
    </Button>
  </>
)

export default LoggedOut
