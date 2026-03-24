import React from 'react'
import '../CSS/Auth.css';
import { FaGoogle } from "react-icons/fa";

function Auth() {
    return (
        <div className='auth'>
            <h3 className='auth-header'>Log in / Sign up now</h3>
            <div className='auth-input'>
                <input type="text" placeholder='Enter to email' className='input' />
                <input type="password" placeholder='Enter to password' className='input' />
            </div>
            <div>
                <button className='google-button' > <FaGoogle style={{ marginRight: '5px' }} />
                    Sign in with Google</button>
                <button className='login-button'>Log in</button>
                <button className='register-button'>Sign up</button>
            </div>

        </div>
    )
}

export default Auth