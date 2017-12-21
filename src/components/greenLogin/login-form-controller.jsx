import React, {Component} from 'react'
import '../../resources/stylus/greenLogin/login-page.styl'
import BubblesBG from './bubbles-bg'
import SignUp from './signup-form'
import SignIn from './signin-form'

class LoginFormController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignIn: false,
            signInHeight: 0,
            signUpHeight: 0
        }
    }

    changeStatusForm = status => {
        this.setState({isSignIn: status})
    }

    render() {
        return (
            <div className='login-wrapper'>
                <div className='login-page' >
                    <div className='login-form-wrapper'>
                        <SignUp status={this.state.isSignIn} changeStatusForm={this.changeStatusForm} />
                        <SignIn status={this.state.isSignIn} changeStatusForm={this.changeStatusForm} />
                    </div>
                </div>
                <BubblesBG/>
            </div>
        )
    }
}

export default LoginFormController
