import { ThemeProvider,Typography, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useContext } from 'react'
import '../../assets/App.css'
import MenuIcon from '@material-ui/icons/Menu'

import { theme, useStyles } from '../MaUI'
import UserPopUp from './UserPopUp'
import SideBar from './Sidebar'

import ciniContext from '../../context/CinisterContext'

const Header = () => {

    const classes = useStyles()

    const {setOpenLogIn, setDrawerState} = useContext(ciniContext)

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container direction="row" justifyContent="space-around" alignItems="center">
                    <Grid item>
                        <Button color="primary" variant="text" onClick={() => setDrawerState(true)}>
                            <MenuIcon style={{fontSize: "2rem"}}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" className={classes.siteTitle}>
                            Cinister
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="text" onClick={() => setOpenLogIn(true)}>
                            Log / Sign
                        </Button>
                    </Grid>
                </Grid>
                <UserPopUp />
                <SideBar />
            </ThemeProvider>
        </div>
    )
}

export default Header
