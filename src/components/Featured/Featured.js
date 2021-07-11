import React, { useContext } from 'react'

import { Grid, Typography, ThemeProvider } from '@material-ui/core'

import { theme, useStyles } from '../MaUI'

import cinisterContext from '../../context/CinisterContext'

const Featured = () => {

    const classes = useStyles()

    const {movieList, featuredTV} = useContext(cinisterContext)


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid className={classes.featuredList}>
                    <Grid item>
                        <Typography color="primary" variant="h5">
                            Featured TV
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.gridrow}>
                            {featuredTV.map((tv, i) =><div key={i} className={classes.gridcard} style={{backgroundImage: `url(${tv.posters})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}>  </div>)}
                        </div>
                    </Grid>
                    <Grid item style={{marginTop: '20px'}}>
                        <Typography color="primary" variant="h5">
                            Featured Movies
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.gridrow}>
                            {movieList.map((movie, i) =><div key={i} className={classes.gridcard} style={{backgroundImage: `url(${movie.posters})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}>  </div>)}
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Featured
