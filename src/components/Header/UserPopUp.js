import { useContext} from 'react'
import { ThemeProvider } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'

import { theme } from '../MaUI'
import CheckMail from './CheckMail'
import Login from './LoginForm'
import SignUp from './SignupForm'

import ciniContext from '../../context/CinisterContext'

const UserPopUp = () => {

    const {openLogIn, setOpenLogIn, emailState, setEmailState} = useContext(ciniContext)

    const handleClose = () => {

        setEmailState(2)
        setOpenLogIn(false)
    }

    return (
        <div>
            <Dialog open={openLogIn} onClose={handleClose}>
                <ThemeProvider theme={theme}>
                {(emailState === 1) ? <CheckMail /> : null }
                {(emailState === 2) ? <Login /> : null }
                {(emailState === 3) ? <SignUp /> : null }
                </ThemeProvider>
            </Dialog>
        </div>
    )
}

export default UserPopUp
