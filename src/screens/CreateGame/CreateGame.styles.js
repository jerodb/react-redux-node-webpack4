import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  about: {
    maxWidth: 600,
  },
  actions: {
    backgroundColor: '#bbbbbb',
    width: '100%',
    paddingTop: '16pt',
    paddingBottom: '16pt'
  },
  btn: {
    width: '100%',
    marginBottom: 12
  },
  btnsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #aaaaaa',
    backgroundColor: '#eeeeee',
    paddingTop: '16pt',
    paddingBottom: '16pt'
  },
  iframe: {
    width: 1,
    minWidth: '100%'
  },
  innerClass: {
    maxWidth: '100%',
  },
  list: {
    margin: 0,
    listStylePosition: 'inside',
    paddingLeft: 0,
    paddingBottom: 32
  },
  partners: {
    marginTop: 48,
    marginBottom: 48
  },
  sample: {
    margin: '0 !important',
    width: '100% !important'
  },
  spinner: {
    color: '#4498c8',
    width: 40,
    height: 40,
  },
  spinnerContainer: {
    padding: 60,
    textAlign: 'center',
    width: '100%',
  },
})

export default styles
