import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  activity: {
    ...theme.mainPadding,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '30%'
  },
}))

export default styles
