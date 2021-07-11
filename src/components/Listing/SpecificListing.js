import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ThemeProvider, Typography, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { theme, useStyles } from '../MaUI'
import cinisterContext from '../../context/CinisterContext'

const SpecificListing = () => {

    let { id } = useParams()
    let fetchPath = ""

    const [itemDetails, setItemDetails] = useState({})

    const {listingGenre} = useContext(cinisterContext)
    const classes = useStyles()


    if (listingGenre == 1) {

        fetchPath = "TVListings"
    } else {

        fetchPath = "MovieListings"
    }

    useEffect(() => {

        window.scrollTo(0,0)
        fetch("/db/"+ fetchPath +"/" + id, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((res) => {
    
          return res.json()
        })
        .then(json => {
          
          setItemDetails(json)
        })
        .catch((err) => {
    
          console.log("Error while fetching " + err)
        })
      }, [])
      
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div item className={classes.listBack} style={{backgroundImage: `url(${itemDetails.backdrops})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}></div>
                <Grid container lg={12} className={classes.specificList}>
                    <Grid item className={classes.listPost} style={{backgroundImage: `url(${itemDetails.posters})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}></Grid>
                    <Grid item >
                    <Typography color="primary" variant="h3" className={classes.itemTitle}>
                        {itemDetails.title}
                    </Typography>
                    <Typography color="primary" variant="h5" className={classes.itemYear}>
                        ({itemDetails.year})
                    </Typography>
                    <Typography color="primary" variant="h6" className={classes.itemDesc}>
                        {itemDetails.description}
                    </Typography>
                    <Button color="primary" variant="contained" className={classes.itemRent}>Rent $3.99</Button>
                    <Button color="primary" variant="contained" className={classes.itemBuy}>Buy $14.99</Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default SpecificListing
