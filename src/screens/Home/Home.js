import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './styles'

export default ({ auth }) => (
  <>
    <Header auth={auth} />
    <div style={styles.container}>LANDING</div>
    <Footer />
  </>
)
