import { createTheme, makeStyles } from '@material-ui/core'
import '../assets/App.css'

export const theme = createTheme({
    
    typography: {
        fontFamily: 'Roboto Mono',
    },
    palette: {
        primary: {
            main: '#15F4EE',
            light: '#2b6e6c'
        },
        secondary: {
            main: '#ED15F4'
        },
    },
})

export const useStyles = makeStyles({

    root: {
        background: '#1B1A2D',
        height: 'auto',
        marginBottom: '-30px',
        paddingBottom: '10px',
    },
    sidebar: {
        background: '#313051',
        height: '100vh',
        width: '70px',
        overflowY: 'hidden',
        overflowX: 'hidden'
    },
    siteTitle: {
        fontSize: '3em',
        fontFamily: 'Reggae One',
        textShadow: '0px 0px 12px #15F4EE',
        marginBottom: '15px'
    },
    popup: {
        background: '#313051',
        padding: '30px 60px',
    },
    signup: {
        background: '#313051',
        padding: '5px',
    },
    heroSection: {
        margin: '2% 10%',
        minHeight: '450px',
        boxShadow: '0px 0px 25px #000',
        position: 'relative',
        borderRadius: '10px',
    },
    heroImage: {
        width: '100%'
    },
    heroTitle: {
        fontSize: '2.5em'
    },
    heroDesc: {
        fontWeight: 440,
    },
    heroYear: {
        position: 'absolute',
        fontWeight: 200,
        fontSize: '1em'
    },
    gridrow: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        overflowY: 'hidden',
        minHeight: '400px',
        '&::-webkit-scrollbar': {
            width: '0.5em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
            borderRadius: '15px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#313051',
            borderRadius: '15px'
        }
    },
    gridcard: {
        maxWidth: "300px",
        padding: "0",
        margin: "1.6em",
        flexBasis: '202px',
        flexGrow: 0,
        flexShrink: 0,
        borderRadius: '10px',
        boxShadow: '0px 0px 25px #000',
    },
    drawericon: {
        fontSize: "2rem",
        padding:"30px 0px 30px"
    },
    featuredList: {
        margin: '2% 10%',
    },
    content: {
        position: 'relative',
        background: 'linear-gradient(to right, #d9a7c7, #fffcdc)',
        borderRadius: '15px',
    },
    contentTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '2.2em',
        position: 'absolute',
        top: '17px',
        left: '10px',
        fontWeight: '300',
        ['@media (max-width: 600px)']: {
          fontSize: '1.3em',
          maxWidth: '40px',
          top: '44px'
        },
        maxWidth: '100px',
    },
    contentRow: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'hidden',
        ['@media (max-width: 600px)']: {
          overflowX: 'auto',
          marginLeft: '115px'
        },
        overflowY: 'hidden',
        minHeight: '170px',
        marginLeft: '205px'
    },
    contentCard: {
        maxWidth: "300px",
        padding: "0",
        margin: "0.6em",
        flexBasis: '140px',
        flexGrow: 0,
        flexShrink: 0,
        borderRadius: '6px',
        boxShadow: '0px 0px 7px #000',
    },
    listingRoot: {
        margin: '2% 10%',
        height: 'auto',
        width: 'auto'
    },
    listingItem: {
        width: "170px",
        height: "290px",
        ['@media (max-width: 600px)']: {
            width: '330px',
            height: '480px'
        },
        padding: "0",
        margin: "1em",
        flexBasis: '202px',
        borderRadius: '10px',
        boxShadow: '0px 0px 25px #000',
    },
    listBack: {
        height: '80vh',
        opacity: '0.2',
        margin: '2% 8%',
        ['@media (max-width: 800px)']: {
            height: '190vh'
        },
    },
    specificList: {
        height: '80vh',
        position: 'absolute',
        top: '15%',
    },
    listPost: {
        position: 'absolute',
        top: '3%',
        left: '6%',
        width: "25%",
        height: "90%",
        ['@media (max-width: 800px)']: {
            top: '0%',
            left: '3%',
            width: '330px',
            height: '480px'
        },
        padding: "0",
        margin: "1em",
        flexBasis: '202px',
        borderRadius: '10px',
        boxShadow: '0px 0px 25px #000',
    },
    itemTitle: {
        position: 'absolute',
        top: '5%',
        left: '35%',
        ['@media (max-width: 800px)']: {
            top: '85%',
            left: '10%',
        },
    },
    itemYear: {
        position: 'absolute',
        top: '15%',
        left: '35%',
        ['@media (max-width: 800px)']: {
            top: '102%',
            left: '10%',
        },
        fontWeight: 350
    },
    itemDesc: {
        position: 'absolute',
        top: '30%',
        left: '35%',
        maxWidth: '50%',
        fontWeight: 300,
        ['@media (max-width: 800px)']: {
            top: '112%',
            left: '10%',
            maxWidth: '80%',
        },
    },
    itemRent: {
        position: 'absolute',
        top: '80%',
        left: '65%',
        ['@media (max-width: 800px)']: {
            top: '205%',
            left: '15%',
        },
    },
    itemBuy: {
        position: 'absolute',
        top: '80%',
        left: '77%',
        ['@media (max-width: 800px)']: {
            top: '205%',
            left: '55%',
        },
    }
}, {index: 1})