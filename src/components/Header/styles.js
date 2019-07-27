import { makeStyles } from '@material-ui/styles'
// import { logo } from '../../res/images'

const styles = makeStyles({
  container: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderBottom: '1px solid #aaaaaa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 140,
    padding: '8px 16px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  logo: {
    // background: `url(${logo}) no-repeat right top`,
    backgroundSize: 'cover',
    height: 58,
    width: 200,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  login: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  welcome: {
    paddingBottom: 100,
    paddingTop: 72,
  }
})

export default styles
