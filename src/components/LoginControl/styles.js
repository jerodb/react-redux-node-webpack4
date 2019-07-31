import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  activity: {
    display: 'flex',
    width: 50,
  },
  iconButton: {
    padding: 6,
  },
  login: {
    height: 48,
    padding: '0 30px',
  },
  pic: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userMenu: {
    backgroundColor: '#525252',
    color: '#ffffff',
    width: 120,
    '& li': {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  userName: {
    backgroundColor: '#777777',
    borderBottom: '1px solid #cccccc',
    fontSize: '1.1em',
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
  },
})

export default styles
