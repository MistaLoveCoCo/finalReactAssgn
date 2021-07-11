import React, {useContext} from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useStyles } from '../MaUI'

import ciniContext from '../../context/CinisterContext'

const LoginForm = () => {

    const classes = useStyles()

    const {email} = useContext(ciniContext)

    return (
        <div>
            <Grid container className={classes.popup} direction="column" justifyContent="center" alignContent="center" alignItems="center">
                <Grid item>
                    <Typography variant="h4" color="primary">
                        Hello, {email}!
                    </Typography>
                </Grid>
                <Grid item style={{margin: '15px'}}>
                <TextField
                    label="Email"
                    variant="outlined"
                    color="primary"
                    required
                    value={email}
                    style={{width: '300px'}}
                    type="email"
                />
                </Grid>
                <Grid item style={{marginBottom: '15px'}}>
                <TextField
                    label="Password"
                    variant="outlined"
                    color="primary"
                    required
                    style={{width: '300px'}}
                    type="password"
                />
                </Grid>
                <Grid item>
                    <Button
                        type="submit"
                        endIcon={<NavigateNextIcon />}
                        variant="contained"
                        color="primary">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginForm
