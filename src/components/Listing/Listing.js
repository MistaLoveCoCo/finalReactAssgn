import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'

import { theme, useStyles } from '../MaUI'
import { Link } from 'react-router-dom'

const Listing = ({genre}) => {

    const classes = useStyles()

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container className={classes.listingRoot} justifyContent="center">
                    {genre.map((tv, i) =><Link key={i} to={`/${tv.id}`}> <div className={classes.listingItem} style={{cursor: "pointer", backgroundImage: `url(${tv.posters})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}>  </div></Link>)}
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Listing
