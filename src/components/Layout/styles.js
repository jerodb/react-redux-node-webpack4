import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  '@global': {
    body: {
      fontSize: 14,
      minWidth: 280,
      [theme.breakpoints.up('sm')]: {
        fontSize: 15,
      },
    }
  },
  container: {
    paddingBottom: 30,
    paddingTop: 30,
    ...theme.mainContainer,
  },
}))

export default styles
