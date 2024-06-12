import React from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Iniciar Sesión</h1>
                <div className='input-box'>
                    <FaUser className='icon' />
                    <input type='text' placeholder='Usuario' required />
                </div>
                <div className='input-box'>
                    <RiLockPasswordFill className='icon' />
                    <input type='password' placeholder='Contraseña' required />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' />Recordar Contraseña</label>
                    <div><a href="#">Olvidó Contraseña</a>
                    </div>
                </div>
                <div className='button-submit'>
                    <button type='submit'>Iniciar Sesión</button>
                </div>
                <div className='register-link'>
                    <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;