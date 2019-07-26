// import { logo } from '../../res/images'

export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #aaaaaa',
    backgroundColor: '#eeeeee',
    paddingBottom: 16
  },
  topWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  logo: {
    // background: `url(${logo}) no-repeat right top`,
    backgroundSize: 'cover',
    width: 200,
    height: 58
  },
  nav: {
    marginLeft: 'auto',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  login: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  welcome: {
    paddingTop: 72,
    paddingBottom: 100
  }
}
