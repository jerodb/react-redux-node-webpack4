import React from 'react'
import Button from '@material-ui/core/Button'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './styles'

export default () => {
  const classes = styles()

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.mainText}>Punch line!!</div>
        <Button className={classes.root}>AWESOME BUTTON</Button>
      </div>
      <Footer />
    </>
  )
}
