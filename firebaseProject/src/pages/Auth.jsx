import React, { useState } from 'react'
import '../CSS/Auth.css';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user;
            if (user) {
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("User created")
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Log in / Sign up now</h3>
            <div className='auth-input'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter to email' className='input' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter to password' className='input' />
            </div>
            <div>
                <button onClick={loginWithGoogle} className='google-button' > <FaGoogle style={{ marginRight: '5px' }} />
                    Sign in with Google</button>
                <button onClick={login} className='login-button'>Log in</button>
                <button onClick={register} className='register-button'>Sign up</button>
            </div>

        </div>
    )
}

export default Auth