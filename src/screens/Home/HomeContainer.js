import React from 'react'
import { connect } from 'react-redux'
import Home from './HomeComponent'
import { getServerInfo, setServerInfo, showError } from '../../actions/serverInfoActions'
import { server } from '../../services'

function HomeContainer({
  data, error, isFetching, onGetServerInfo, onSetServerInfo, onShowError
}) {
  const onClick = async () => {
    onGetServerInfo()
    const serverInfo = await server.getInfo()

    if (serverInfo && serverInfo.error) onShowError(serverInfo.error)
    else onSetServerInfo(serverInfo)
  }

  return (
    <Home
      data={data}
      error={error}
      isFetching={isFetching}
      onClick={onClick}
    />
  )
}

const mapStateToProps = state => {
  const { data, error, isFetching } = state.serverInfo

  return {
    data,
    error,
    isFetching,
  }
}

const mapDispatchToProps = dispatch => ({
  onGetServerInfo: () => dispatch(getServerInfo()),
  onSetServerInfo: data => dispatch(setServerInfo(data)),
  onShowError: err => dispatch(showError(err)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
