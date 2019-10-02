/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import HomeComponent from './Home.component'

const Home = () => {
  const [iframeIsLoading, toggleIframeIsLoading] = useState(true)

  const iframeName = 'homeIframe'

  const loadIframe = () => {
    const element = document.getElementById(iframeName)

    if (document.body.contains(element)) {
      window.iFrameResize({
        log: true,
      }, `#${iframeName}`)

      toggleIframeIsLoading(false)
    }
  }

  return (
    <HomeComponent
      iframeName={iframeName}
      iframeSrc={`${process.env.GAMES_HOST}/sample`}
      iframeIsLoading={iframeIsLoading}
      onLoadIframe={loadIframe}
    />
  )
}

export default Home
