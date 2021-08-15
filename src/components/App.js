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
  const [searchListing, setSearchListing] = useState({})
  useEffect(() => {
  
    fetch("https://javaspringkarthik.herokuapp.com/movies")
    .then((res) => { return res.json() })
    .then((json) => {
    
      setMovieList(json.body);
    });
  }, [])
    
  useEffect(() => {
    fetch("https://javaspringkarthik.herokuapp.com/tv?featured=true")
    .then((res) => { return res.json() })
    .then((json) => {
    
      setFeaturedTV(json.body);
    });
  }, [])

  useEffect(() => {

    fetch("https://javaspringkarthik.herokuapp.com/tv")
    .then((res) => { return res.json() })
    .then((json) => {
    
      setTvListing(json.body);
    });
  }, [])

  useEffect(() => {

    fetch("https://javaspringkarthik.herokuapp.com/movies")
    .then((res) => { return res.json() })
    .then((json) => {
    
      setMovieListing(json.body);
    });
  }, [])

  return (
    <Router>
        <div className={classes.root}>
          <ciniContext.Provider value={{searchListing, setSearchListing, openLogIn, setOpenLogIn, drawerState, setDrawerState, email, setEmail, emailState, setEmailState, movieList, setMovieList, featuredTV, podcasts, listingGenre, setListingGenre, tvListing, movieListing}}>
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
                <Route exact path='/search'>
                  {(listingGenre === 3 && searchListing.length > 0) ? <Listing genre={searchListing}  /> : null}
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
