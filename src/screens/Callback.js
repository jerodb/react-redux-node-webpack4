import React from 'react'
import NoSsr from '@material-ui/core/NoSsr'
import { loading } from '../res/images'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '20%'
}

class Callback extends React.Component {
  componentDidMount() {
    this.handleAuthentication()
  }

  handleAuthentication = () => {
    const { auth, location } = this.props
    console.log('this.props: ', this.props)

    if (/access_token|id_token|error/.test(location.hash)) {
      console.log('location.hash: ', location.hash)
      auth.handleAuthentication()
    }
  }

  render() {
    return (
      <NoSsr>
        <div style={styles}>
          <img src={loading} alt="loading" />
        </div>
      </NoSsr>
    )
  }
}

export default Callback
