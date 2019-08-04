import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create theme instance.
const theme = createMuiTheme({
  mainPadding: {
    paddingBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30,
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
      main: '#ffffff',
      color: '#24292e',
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
