import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import NoSsr from '@material-ui/core/NoSsr'
import Frame from '../../components/Frame'
import Title from '../../components/Title'
import styles from './Home.styles'

const HomeComponent = ({
  iframeName, onLoadIframe, iframeIsLoading, iframeSrc
}) => {
  const classes = styles()

  return (
    <>
      <Frame wrapperClass={classes.frame}>
        <div className={classes.welcome}>{'News don\'t scale, news-games do.'}</div>
        <Link to="create-game">
          <Button variant="contained" color="primary">
            Create Game
          </Button>
        </Link>
      </Frame>
      <Frame>
        <Title size={2} text="Test Sample" />
        <div>Sample del juego: Cómo se cargan los datos, cómo funciona el juego. Se podría poner otro call to action que lleve a Create Game.</div>
        <div className={classes.iframeWrapper}>
          <Grid item xs={12} className={classes.iframeInner}>
            <NoSsr>
              {iframeIsLoading && (
              <div className={classes.spinnerContainer}>
                <CircularProgress className={classes.spinner} />
              </div>
              )}
              <iframe
                title={iframeName}
                id={iframeName}
                className={classes.iframe}
                src={iframeSrc}
                frameBorder="0"
                scrolling="no"
                onLoad={onLoadIframe}
              />
            </NoSsr>
          </Grid>
        </div>
      </Frame>
      <Frame wrapperClass={classes.frame}>
        <Grid item xs={12} className={classes.iframeWrapper}>
          <ul className={classes.list}>
            <li>Everytime a media outlet publishes a story, it is copy/pasted everywhere and it quickly loses value.</li>
            <li>News games grow over time: everytime a story becomes a game, readers play with it for months. More people know the story, it increases the value and it becomes harder to copy.</li>
            <li>We build news games.</li>
            <li>We connect with global audiences with issues that matters</li>
            <li>We help media companies to build unique content that is not easy to replicate.</li>
            <li>We help to understand user’s behaviour to grow both audience and loyalty.</li>
            <li>Media companies embed our stories to increase their engagement. Our partners can customize stories for local audience.</li>
          </ul>
        </Grid>
      </Frame>
    </>
  )
}

export default HomeComponent
