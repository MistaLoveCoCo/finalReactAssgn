import React, {useContext} from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useStyles } from '../MaUI'

import ciniContext from '../../context/CinisterContext'

const SignupForm = () => {

    const classes = useStyles()

    const {email} = useContext(ciniContext)

    return (
        <div>
            <Grid container className={classes.signup} justifyContent="center" alignContent="center" alignItems="center">
                <Typography variant="h5" color="primary">
                    Please enter your details
                </Typography>
            </Grid>
            <Grid container className={classes.signup} justifyContent="center" alignContent="center" alignItems="center">
                <Grid item style={{margin: '15px'}}>
                    <TextField 
                        label="Email"
                        variant="outlined"
                        color="primary"
                        required
                        style={{width: '100%'}}
                        value={email}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.signup} justifyContent="center" alignContent="center" alignItems="center">
                <Grid item style={{margin: '15px'}} >
                    <TextField 
                        label="First Name"
                        variant="outlined"
                        color="primary"
                        required
                    />
                </Grid>
                <Grid item style={{margin: '15px'}} >
                    <TextField 
                        label="Last Name"
                        variant="outlined"
                        color="primary"
                        required
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.signup} justifyContent="center" alignContent="center" alignItems="center">
                <Grid item style={{margin: '15px'}} >
                    <TextField 
                        label="Type Password"
                        variant="outlined"
                        color="primary"
                        required
                        type="password"
                    />
                </Grid>
                <Grid item style={{margin: '15px'}} >
                    <TextField 
                        label="Re-type Password"
                        variant="outlined"
                        color="primary"
                        required
                        type="password"
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.signup} justifyContent="center" alignContent="center" alignItems="center">
                <Grid item style={{margin: '15px'}}>
                    <Button
                        type="submit"
                        endIcon={<NavigateNextIcon />}
                        variant="contained"
                        color="primary">
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignupForm
