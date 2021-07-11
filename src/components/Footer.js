import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid, Typography, ThemeProvider , Button} from '@material-ui/core';
import { useStyles, theme } from './MaUI';

const Footer = () => {

    const classes = useStyles()
    
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid container>
                <Grid container direction='row' justifyContent="center" style={{marginTop: '6%'}}>
                    <Typography color="primary" variant="h6">
                        &copy;2021 Cinister.
                    </Typography>
                </Grid>
                <Grid container direction='row' justifyContent="center">
                    <Button color="primary" variant="text" >
                        <TwitterIcon className={classes.drawericon}/>
                    </Button>
                    <Button color="primary" variant="text" >
                        <InstagramIcon className={classes.drawericon}/>
                    </Button>
                    <Button color="primary" variant="text" >
                        <FacebookIcon className={classes.drawericon}/>
                    </Button>
                    <Button color="primary" variant="text" >
                        <LinkedInIcon className={classes.drawericon}/>
                    </Button>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Footer
