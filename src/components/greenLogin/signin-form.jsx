import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SignIn = props => {
    const hideThis = () => {
        props.changeStatusForm(true)
    }
    const formSubmit = e => {
        e.preventDefault()
        console.log('аудентификация клиента')
    }
    return (
        <form className='login-form' style={{height: props.isVisible ? '200px' : '0px'}}>
            <input type='text' placeholder='Имя пользователя'/>
            <input type='password' placeholder='пароль'/>
            <button onClick={formSubmit}> Войти </button>
            <p className='little-message'>
                <span> Не зарегистрированы? </span>
                <Link to='/auth' onClick={hideThis}>Создать аккаунт</Link>
            </p>
        </form>     
    )
}

SignIn.propTypes = {
    changeStatusForm: PropTypes.func,
    isVisible: PropTypes.bool
}

export default SignIn
