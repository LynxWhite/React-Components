import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0
        }
        this.timer = null
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.status === false && !this.timer) {
            this.timer = setInterval(() => {
                this.setState({height: this.state.height - 10})
                if (this.state.height <= 0) {
                    clearInterval(this.timer)
                    this.timer = null
                }
            }, 0)
        }

        if (nextProps.status === true && !this.timer) {
            this.timer = setInterval(() => {
                this.setState({height: this.state.height + 10})
                if (this.state.height >= 300) {
                    clearInterval(this.timer)
                    this.timer = null
                }
            }, 0)
        }
    }

    hideThis = () => {
        this.props.changeStatusForm(false)
    }

    render() {
        return (
            <form className='register-form' style={{height: this.state.height + 'px'}}>
                <input type='text' placeholder='Имя пользователя'/>
                <input type='password' placeholder='пароль'/>
                <input type='text' placeholder='email'/>
                <button> Создать </button>
                <p className='little-message'>
                    <span> Уже зарегистрированы? </span>
                    <Link to='/auth' onClick={this.hideThis}>Войти</Link>
                </p>
            </form>     
        )
    }
}

SignUp.propTypes = {
    status: PropTypes.bool,
    changeStatusForm: PropTypes.func
}

export default SignUp
