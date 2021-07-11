import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { useSpring, animated, config } from 'react-spring'
import { theme, useStyles } from '../MaUI'

const ImageLoader = (props) => {

    const classes = useStyles()
    
    const headerAni = useSpring({

        to: {position: 'absolute', top: '9%', left: '5%', color: "#FFF", fontFamily: "Roboto Mono"},
        from: {position: 'absolute', top: '-20%', left: '5%', color: "#FFF", fontFamily: "Roboto Mono"},
        delay: 100,
        config: config.molasses,
    })
    
    const headerDesc = useSpring({

        to: {position: 'absolute', top: '35%', left: '5%', color: "#FFF", fontFamily: "Roboto Mono"},
        from: {position: 'absolute', top: '-20%', left: '5%', color: "#FFF", fontFamily: "Roboto Mono"},
        delay: 50,
        config: config.molasses,
    })

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={classes.heroSection} style={{backgroundImage: `url(${props.item.backdrops})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
                    <animated.h3 style={headerAni} className={classes.heroTitle}>
                        {props.item.title}
                    </animated.h3>
                    <animated.h3 style={headerAni} className={classes.heroYear}>({props.item.year})</animated.h3>
                    <animated.h4 style={headerDesc} className={classes.heroDesc}>{props.item.description}</animated.h4>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default ImageLoader
