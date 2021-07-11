import React, {useContext} from 'react'
import Carousel from 'react-material-ui-carousel'

import ImageLoader from './ImageLoader'

import cinisterContext from '../../context/CinisterContext'

const HeroSection = () => {
    
    const {movieList} = useContext(cinisterContext)

    return (
        <div>
        <Carousel>
            {
                movieList.map((item, i) => <ImageLoader key={i} item={item} />)
            }
        </Carousel>
        </div>
    )
}

export default HeroSection
