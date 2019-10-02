import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  bgAlt: {
    backgroundColor: '#ffffff'
  },
  container: {
    ...theme.mainWrapper,
    ...theme.vPadding,
    flexDirection: 'column',
    textAlign: 'center',
  },
  frame: {
    backgroundColor: '#eaeaea'
  },
  hideIframe: {
    height: 0,
    visibility: 'hidden',
  },
  iframe: {
    width: 1,
    minWidth: '100%',
  },
  iframeInner: {
    maxWidth: 800,
  },
  iframeWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  list: {
    margin: 0,
    listStylePosition: 'inside',
    paddingLeft: 0,
    paddingBottom: 32,
    textAlign: 'left'
  },
  showIframe: {
    height: 'auto',
    visibility: 'visible',
  },
  spinner: {
    color: '#4498c8',
    width: 40,
    height: 40,
  },
  spinnerContainer: {
    padding: 60,
  },
  welcome: {
    paddingTop: 72,
    paddingBottom: 100
  },
}))

export default styles
