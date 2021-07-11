import React from 'react'
import TvIcon from '@material-ui/icons/LiveTv'
import MovieIcon from '@material-ui/icons/Movie'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Grid, Drawer } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { useStyles } from '../MaUI'

import ciniContext from '../../context/CinisterContext'

const Sidebar = () => {

    const classes = useStyles()
    const history = useHistory()

    const {drawerState, setDrawerState, setListingGenre, setOpenLogIn, listingGenre} = useContext(ciniContext)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawerState(open);
    }

    const updateRoute = (path) => {

        if (path == 'home') {

            history.push('/')    
        } else if (path == 'tv') {

            setListingGenre(1)
            history.push('/television')
        } else if (path == 'movie') {

            setListingGenre(2)
            history.push('/movie')            
        } else if (path == 'profile') {

            setOpenLogIn(true)
        }
    }

    const list = () => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <Grid container justifyContent="space-evenly" direction="column" alignContent="center" className={classes.sidebar} >
                <Grid item>
                    <Button color="primary" variant="text" onClick={() => updateRoute('home')}>
                        <HomeIcon className={classes.drawericon}/>
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="text" onClick={() => updateRoute('tv')}>
                        <TvIcon className={classes.drawericon}/>
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="text" onClick={() => updateRoute('movie')}>
                        <MovieIcon className={classes.drawericon}/>
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="text" onClick={() => updateRoute('profile')}>
                        <AccountCircleIcon className={classes.drawericon}/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )

    return (
        <div>
            <Drawer anchor={'left'} open={drawerState} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    )
}

export default Sidebar
