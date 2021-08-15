import { ThemeProvider,Typography, Grid, TextField, InputAdornment } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useContext , useState} from 'react'
import '../../assets/App.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import { theme, useStyles } from '../MaUI'
import UserPopUp from './UserPopUp'
import SideBar from './Sidebar'
import { useHistory } from 'react-router-dom'

import ciniContext from '../../context/CinisterContext'

const Header = () => {

    const classes = useStyles()
    const history = useHistory()
    const {setOpenLogIn, setDrawerState, setSearchListing, setListingGenre} = useContext(ciniContext)

    const [searchTitle, setSearchTitle] = useState('') 

    const onSubmitSearch = () => {

    fetch(`https://javaspringkarthik.herokuapp.com/movies/find?name=${searchTitle}`)
    .then((res) => { return res.json() })
    .then((json) => {

        if (json.body.length >= 1) {

            setListingGenre(3)
            setSearchListing(json.body)
            history.push('/search')
        }
    })
    }
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
                <Grid container alignItems="flex-end" justify="flex-end">
                    <Grid item>
                        <TextField
                            size = "small"
                            variant="outlined"
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="text" onClick={()=>onSubmitSearch()}>
                            <SearchIcon style={{fontSize: "2rem"}}/>
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
