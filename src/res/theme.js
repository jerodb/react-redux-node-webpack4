import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create theme instance.
const theme = createMuiTheme({
  actionBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  mainPadding: {
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30,
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
