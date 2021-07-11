import React, {useContext} from 'react'
import {ThemeProvider, Grid} from '@material-ui/core'
import {theme, useStyles} from '../MaUI'
import cinisterContext from '../../context/CinisterContext'

const Content = () => {

    const classes = useStyles()
    const {podcasts} = useContext(cinisterContext)

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid className={classes.featuredList}>
                    <Grid item>
                        <div className={classes.content}>
                            <div className={classes.contentTitle}>
                                Top Video Podcasts
                            </div>
                            <div className={classes.contentRow}>
                                {podcasts.map((pods, i) =><div key={i} className={classes.contentCard} style={{backgroundImage: `url(${pods.posters})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>  </div>)}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Content
