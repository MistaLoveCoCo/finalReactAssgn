import { useState, useEffect } from 'react'
import { useStyles } from './MaUI'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import FeaturedSection from './Featured/Featured'
import ContentSection from './Content/Content'
import Listing from './Listing/Listing'
import ciniContext from '../context/CinisterContext'
import SpecificListing from './Listing/SpecificListing';
import Footer from './Footer';

function App() {
  
  const classes = useStyles()

  const [openLogIn, setOpenLogIn] = useState(false)
  const [drawerState, setDrawerState] = useState(false)
  const [emailState, setEmailState] = useState(1)
  const [email, setEmail] = useState('')
  const [movieList, setMovieList] = useState({})
  const [featuredTV, setFeaturedTV] = useState({})
  const [podcasts, setPodcasts] = useState({})
  const [listingGenre, setListingGenre] = useState()
  const [tvListing, setTvListing] = useState({})
  const [movieListing, setMovieListing] = useState({})

  useEffect(() => {
    
    async function movieData() {

      const response = await fetch("/db/HeroSectionMovies", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      const data = await response.json()
      setMovieList(data)
    }
    movieData()
  }, [])
    
  useEffect(() => {

    async function featTVData() {

      const response = await fetch("/db/FeaturedTV", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      const data = await response.json()
      setFeaturedTV(data)
    }
    featTVData()
  }, [])

  useEffect(() => {

    fetch("/db/Podcasts", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res) => {

      return res.json()
    })
    .then(json => {
      
      setPodcasts(json)
    })
    .catch((err) => {

      console.log("Error while fetching Podcasts " + err)
    })
  }, [])

  useEffect(() => {

    fetch("/db/TVListings", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res) => {

      return res.json()
    })
    .then(json => {
      
      setTvListing(json)
    })
    .catch((err) => {

      console.log("Error while fetching TVListings " + err)
    })
  }, [])

  useEffect(() => {

    fetch("/db/MovieListings", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res) => {

      return res.json()
    })
    .then(json => {
      
      setMovieListing(json)
    })
    .catch((err) => {

      console.log("Error while fetching MovieListings " + err)
    })
  }, [])

  return (
    <Router>
        <div className={classes.root}>
          <ciniContext.Provider value={{openLogIn, setOpenLogIn, drawerState, setDrawerState, email, setEmail, emailState, setEmailState, movieList, setMovieList, featuredTV, podcasts, listingGenre, setListingGenre, tvListing, movieListing}}>
              <Header />
              <Switch>
                <Route exact path='/'>
                  {(movieList.length > 1) ? <HeroSection /> : null}
                  {(featuredTV.length > 1 && movieList.length > 1) ? <FeaturedSection /> : null}
                  {(podcasts.length > 1) ? <ContentSection /> : null}
                </Route>
                <Route exact path='/television'>
                  {(listingGenre === 1 && tvListing.length > 0) ? <Listing genre={tvListing} /> : null}
                </Route>
                <Route exact path='/movie'>
                  {(listingGenre === 2 && movieListing.length > 0) ? <Listing genre={movieListing}  /> : null}
                </Route>
                <Route exact path ="/:id" component={SpecificListing} />
              </Switch>
              <Footer />
          </ciniContext.Provider>
        </div>
    </Router>
  );
}

export default App;
