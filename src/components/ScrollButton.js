/* eslint-disable no-undef */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { arrowTop } from '../res/images'

class ScrollButton extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: 0,
      visible: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const { visible } = this.state
    const newState = event.pageY > 700 || false

    if (visible !== newState) this.setState({ visible: newState })
  }

  scrollStep() {
    const { scrollStepInPx } = this.props
    const { intervalId } = this.state

    if (window.pageYOffset === 0) {
      clearInterval(intervalId)
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx)
  }

  scrollToTop() {
    const { delayInMs } = this.props

    const intervalId = setInterval(this.scrollStep.bind(this), delayInMs)
    this.setState({ intervalId })
  }

  render() {
    const { classes } = this.props
    const { visible } = this.state

    if (visible) {
      return (
        <button
          type="button"
          title="Back to top"
          className={classes.scroll}
          onClick={() => {
            this.scrollToTop()
          }}
        >
          <div className={`${classes.arrowUp}`} />
        </button>
      )
    }

    return ''
  }
}

ScrollButton.propTypes = {
  classes: PropTypes.object.isRequired,
  scrollStepInPx: PropTypes.number.isRequired,
  delayInMs: PropTypes.number.isRequired,
}

const styles = () => ({
  scroll: {
    opacity: 0.4,
    width: 50,
    height: 50,
    position: 'fixed',
    bottom: 15,
    right: 20,
    borderRadius: 50,
    border: '2px solid #e2d62d',
    cursor: 'pointer',
    background: 'transparent',
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '&:hover': {
      opacity: 1,
    },
  },
  arrowUp: {
    background: `transparent url('${arrowTop}') no-repeat right top`,
    backgroundSize: 'cover',
    width: 20,
    height: 23,
    marginLeft: 5,
  },
})

export default withStyles(styles)(ScrollButton)
