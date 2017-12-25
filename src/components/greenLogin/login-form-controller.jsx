import React, {Component} from 'react'
import '../../resources/stylus/greenLogin/login-page.styl'
import BubblesBG from './bubbles-bg'
import SignUp from './signup-form'
import SignIn from './signin-form'

class LoginFormController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchMode: false
        }
    }

    changeStatusForm = status => {
        this.setState({switchMode: status})
    }

    render() {
        return (
            <div className='login-wrapper'>
                <div className='login-page' >
                    <div className='login-form-wrapper'>
                        <SignUp changeStatusForm={this.changeStatusForm} isVisible={this.state.switchMode} />
                        <SignIn changeStatusForm={this.changeStatusForm} isVisible={!this.state.switchMode} />
                    </div>
                </div>
                <BubblesBG/>
            </div>
        )
    }
}

export default LoginFormController
