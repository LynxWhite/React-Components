import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 200
        }
        this.timer = null
    }

    hideThis = () => {
        this.props.changeStatusForm(true)
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.status === true && !this.timer && nextState.height !== 0) {
            this.setState({height: 0})
        }
        if (nextProps.status === false && !this.timer && nextState.height === 0) {
            this.setState({height: 200})
        }
    }

    render() {
        return (
            <form className='login-form' style={{height: this.state.height + 'px'}}>
                <input type='text' placeholder='Имя пользователя'/>
                <input type='password' placeholder='пароль'/>
                <button> Войти </button>
                <p className='little-message'>
                    <span> Не зарегистрированы? </span>
                    <Link to='/auth' onClick={this.hideThis}>Создать аккаунт</Link>
                </p>
            </form>     
        )
    }
}

SignIn.propTypes = {
    status: PropTypes.bool,
    changeStatusForm: PropTypes.func
}

export default SignIn
