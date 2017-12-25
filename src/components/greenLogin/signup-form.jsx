import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SignUp = props => {
    const hideThis = () => {
        props.changeStatusForm(false)
    }
    const formSubmit = e => {
        e.preventDefault()
        console.log('Создание клиента')
    }
    return (
        <form className='register-form' style={{height: props.isVisible ? '270px' : '0px'}}>
            <input type='text' placeholder='Имя пользователя'/>
            <input type='password' placeholder='пароль'/>
            <input type='text' placeholder='email'/>
            <button onClick={formSubmit}> Создать </button>
            <p className='little-message'>
                <span> Уже зарегистрированы? </span>
                <Link to='/auth' onClick={hideThis}>Войти</Link>
            </p>
        </form>     
    )
}

SignUp.propTypes = {
    changeStatusForm: PropTypes.func,
    isVisible: PropTypes.bool
}

export default SignUp
