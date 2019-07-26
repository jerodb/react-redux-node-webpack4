import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

export default () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div style={styles.container}>
        <div>LANDING</div>
        <Button className={classes.root}>BUTTON</Button>
      </div>
      <Footer />
    </>
  )
}
