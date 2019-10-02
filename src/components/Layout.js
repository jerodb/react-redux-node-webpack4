import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ Comp }) => (
  <>
    <Header />
    <Comp />
    <Footer />
  </>
)

export default Layout
