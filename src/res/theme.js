import { createMuiTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const hPadding = {
  paddingLeft: '16pt',
  paddingRight: '16pt',
  [breakpoints.up('sm')]: {
    paddingLeft: '32pt',
    paddingRight: '32pt',
  },
}

// Create theme instance.
const theme = createMuiTheme({
  '@global': {
    a: {
      outline: 0,
      textDecoration: 'none',
    },
    body: {
      color: '#222222',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: 14,
      minWidth: 280,
      [breakpoints.up('sm')]: {
        fontSize: 15,
      },
    }
  },
  hPadding,
  vPadding: {
    paddingBottom: '16pt',
    paddingTop: '16pt',
    [breakpoints.up('sm')]: {
      paddingBottom: '32pt',
      paddingTop: '32pt',
    },
  },
  mainInner: {
    maxWidth: 1280,
    margin: '0 auto',
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
    width: '100%',
    ...hPadding,
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
