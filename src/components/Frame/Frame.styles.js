import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  inner: {
    ...theme.mainInner
  },
  wrapper: {
    ...theme.mainWrapper,
    ...theme.vPadding,
    flexDirection: 'column',
    textAlign: 'center',
  },
}))

export default styles
