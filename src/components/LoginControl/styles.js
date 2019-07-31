import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  activity: {
    display: 'flex',
    width: 50,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 110,
    justifyContent: 'center',
  },
  loggedInWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    width: 100,
  },
  pic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 8
  }
})

export default styles
