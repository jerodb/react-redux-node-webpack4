import React from 'react'
import Button from '@material-ui/core/Button'
import NoSsr from '@material-ui/core/NoSsr'
import LoginControl from '../LoginControl'
import styles from './styles'

export default () => (
  <div style={styles.container} className="paddingTop paddingH">
    <div style={styles.topWrapper}>
      <div style={styles.logo} />
      <div style={styles.nav}>
        <NoSsr><LoginControl /></NoSsr>
      </div>
    </div>
    <div style={styles.welcome}>Punch line!</div>
    <Button variant="contained" color="primary">
      Test Sample
    </Button>
  </div>
)
