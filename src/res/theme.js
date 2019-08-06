import { createMuiTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

// Create theme instance.
const theme = createMuiTheme({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: 1024,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    [breakpoints.up('sm')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  overrides: {
    MuiList: {
      padding: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      color: '#24292E',
    },
    secondary: {
      main: '#19857B',
    },
    error: {
      main: '#00FFFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },
})

export default theme
