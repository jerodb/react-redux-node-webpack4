import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 110,
    justifyContent: 'center',
    minWidth: 130,
    padding: 10,
  },
  loggedInWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  pic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 8
  }
})

export const activityStyles = {
  activity: {
    display: 'flex',
    width: 50,
  },
}

export default styles
