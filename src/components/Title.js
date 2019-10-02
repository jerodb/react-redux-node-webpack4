import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ size, style, text }) => {
  const styles = {
    wrapper: {
      padding: 16,
      fontSize: `${size}em`
    },
    ...style
  }

  switch (size) {
    case 1:
      return (
        <h1 style={styles}>
          {text}
        </h1>
      )
    case 2:
      return (
        <h2 style={styles}>
          {text}
        </h2>
      )
    case 3:
      return (
        <h3 style={styles}>
          {text}
        </h3>
      )
    default:
      return (
        <div style={styles}>
          {text}
        </div>
      )
  }
}

Title.defaultProps = {
  size: 0,
  style: {}
}

Title.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
}

export default Title
