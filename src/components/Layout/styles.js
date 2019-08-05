import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    ...theme.mainPadding
  },
}))

export default styles
