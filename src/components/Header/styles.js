import { makeStyles } from '@material-ui/styles'
import { logo } from '../../res/images'

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: 86,
    padding: '8px 16px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {

  },
  logo: {
    background: `url(${logo}) no-repeat right top`,
    backgroundSize: 'cover',
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    width: 41,
    [theme.breakpoints.up('sm')]: {
      height: 60,
      width: 63,
    },
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
    fontSize: '1.3em',
    fontWeight: '500',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

export default styles
