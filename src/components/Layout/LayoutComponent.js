import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './styles'

const LayoutComponent = ({ Comp }) => {
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

export default LayoutComponent
