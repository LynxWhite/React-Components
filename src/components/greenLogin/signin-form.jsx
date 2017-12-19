import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 300
        }
        this.timer = null
    }

    hideThis = () => {
        this.props.changeStatusForm(true)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.timer)
        if (nextProps.status === true && !this.timer) {
            this.timer = setInterval(() => {
                this.setState({height: this.state.height - 10})
                if (this.state.height <= 0) {
                    clearInterval(this.timer)
                    this.timer = null
                }
            }, 0)
        }

        if (nextProps.status === false && !this.timer) {
            this.timer = setInterval(() => {
                this.setState({height: this.state.height + 10})
                if (this.state.height >= 300) {
                    clearInterval(this.timer)
                    this.timer = null
                }
            }, 0)
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
