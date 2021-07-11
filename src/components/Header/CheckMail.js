import React, {useContext} from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useStyles } from '../MaUI'

import ciniContext from '../../context/CinisterContext'

const CheckMail = () => {

    const classes = useStyles()

    const {email, setEmail, setEmailState} = useContext(ciniContext)

    const updateMail = () => {

        if (email === 'test@test.com') {

            setEmailState(2)
        } else {

            setEmailState(3)
        }
    }

    return (
        <div>
            <form>
            <Grid container className={classes.popup} direction="column" justifyContent="center" alignContent="center" alignItems="center">
                <Grid item>
                    <Typography variant="h5" color="primary">
                        Login or Sign up
                    </Typography>
                </Grid>
                <Grid item style={{margin: '15px'}}>
                <TextField 
                    label="Email"
                    variant="outlined"
                    color="primary"
                    required
                    style={{width: '300px'}}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </Grid>
                <Grid item>
                    <Button 
                        type="submit"
                        endIcon={<NavigateNextIcon />}
                        variant="contained"
                        color="primary"
                        onClick={updateMail}>
                        Proceed
                    </Button>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}

export default CheckMail
