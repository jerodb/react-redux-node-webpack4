import React from 'react'
import Button from '@material-ui/core/Button'

const LoggedIn = ({ logout, picture, userName }) => (
  <>
    <div style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 12
    }}
    >
      <span>{`${userName}`}</span>
      <img style={{ width: 40, borderRadius: 50, marginLeft: 8 }} src={picture} alt="" />
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

export default LoggedIn
