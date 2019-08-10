import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  container: {
    paddingBottom: 30,
    paddingTop: 30,
    ...theme.mainContainer,
  },
}))

export default styles
