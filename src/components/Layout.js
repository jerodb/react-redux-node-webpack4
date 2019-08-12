import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ Comp }) => {
  const classes = styles()

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Comp />
      </div>
      <Footer />
    </>
  )
}

export default Layout

const styles = makeStyles(theme => ({
  container: {
    paddingBottom: 30,
    paddingTop: 30,
    ...theme.mainContainer,
  },
}))
