/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import CreateGameComponent from './CreateGame.component'

const CreateGame = () => {
  const [iframeIsLoading, toggleIframeIsLoading] = useState(true)

  const iframeName = 'createGameIframe'

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
    <CreateGameComponent
      iframeName={iframeName}
      iframeSrc={`${process.env.GAMES_HOST}/sample`}
      iframeIsLoading={iframeIsLoading}
      onLoadIframe={loadIframe}
    />
  )
}

export default CreateGame
