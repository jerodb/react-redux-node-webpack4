import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  button: theme.actionBtn,
  home: {
    minHeight: 300,
    textAlign: 'center',
  },
  message: {
    paddingTop: 24,
    paddingBottom: 24,
  },
}))

export default styles
