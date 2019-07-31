import { makeStyles } from '@material-ui/styles'
import { logo } from '../../res/images'

const styles = makeStyles({
  container: {
    display: 'flex',
    padding: 16,
  },
  loginControl: {
    marginLeft: 'auto'
  },
  logo: {
    background: `url(${logo}) no-repeat right top`,
    display: 'table',
    height: 110,
    width: 118,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    listStylePosition: 'outside',
    listStyleType: 'none',
  },
  navBar: {
    display: 'flex',
    width: '100%',
  },
  navBtn: {
    fontSize: '1.5em',
    fontWeight: '500',
  },
})

export default styles
