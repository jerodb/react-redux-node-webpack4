import React from 'react'
import frameStyles from './Frame.styles'

const Frame = ({ children, innerClass, wrapperClass }) => {
  const defaultClasses = frameStyles()

  return (
    <div className={`${defaultClasses.wrapper} ${wrapperClass || ''}`}>
      <div className={`${defaultClasses.inner} ${innerClass || ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Frame
