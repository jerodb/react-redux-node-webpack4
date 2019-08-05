import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles'

const HomeComponent = ({
  data, error, isFetching, onClick
}) => {
  const classes = styles()

  return (
    <div className={classes.home}>
      <Button className={classes.button} onClick={onClick}>Fetch Server Info</Button>
      {data && (
        <ul className={classes.info}>
          { data.map(d => (
            <li>
              <b>{`${d.name}: `}</b>
              {d.value}
            </li>
          ))}
        </ul>
      )}
      {error && <div className={classes.error}>{error}</div>}
      {isFetching && (
        <div className={classes.spinnerContainer}>
          <CircularProgress className={classes.spinner} />
        </div>
      )}
    </div>
  )
}

export default HomeComponent
