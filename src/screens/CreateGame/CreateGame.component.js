/* eslint-disable react/no-danger */
import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import NoSsr from '@material-ui/core/NoSsr'
import Frame from '../../components/Frame'
import styles from './CreateGame.styles'


const CreateGame = ({
  iframeName, onLoadIframe, iframeIsLoading, iframeSrc
}) => {
  const classes = styles()

  /*
  const loadData = () => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSg3K1-rQqyEaHt1Kpr8u7dol39P7Rk-Ibq4aQlGSEeopiFupmXWDsytnu3WStK4kxKLrxgJCMXXE7q/pub?gid=0&single=true&output=csv'

    const xmlhttp = new window.XMLHttpRequest()

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        // eslint-disable-next-line no-console
        console.log('xmlhttp.responseText: ', xmlhttp.responseText)
      }
    }

    xmlhttp.open('GET', url, true)
    xmlhttp.send(null)
  }
  */
  return (
    <>
      <Frame innerClass={classes.innerClass}>
        <Grid container>
          <Grid item xs={12} md={6} style={{ display: 'flex' }}>
            <div className={classes.actions}>
              <ul className={classes.list}>
                <li>Add csv file with data or paste googlespredsheets Publish to web url</li>
                <li>Set title (allow empty)</li>
                <li>Set intro (allow empty)</li>
                <li>Set x axis label (allow empty)</li>
                <li>Set y axis label (allow empty)</li>
                <li>Set .fecha de corte. (Se completa con el número de fila del datasheet. Si no se habilita el default es la mitad del datasheet.)</li>
                <li>Set .fecha de corte. text (es lo que en el ejemplo dice (*) 10 de diciembre...) (allow empty)</li>
                <li>Set answer (allow empty)</li>
                <li>{'Set LANG for default texts (esto es más que nada para el texto \'Complete el gráfico dibujando con el dedo o el mouse.\' y algún otro tip que lleve el gráfico interactivo.)(Se puede elegir entre Inglés y Español)'}</li>
              </ul>
              <div className={classes.btnsWrapper}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" color="primary" className={classes.btn}>
                      Reset Graph
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" color="primary" className={classes.btn}>
                      Save Draft
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" color="primary" className={classes.btn}>
                      Publish
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
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
        </Grid>
        <div>
          { /* JSON.stringify(sampledata) */}
        </div>
      </Frame>
    </>
  )
}

export default CreateGame
