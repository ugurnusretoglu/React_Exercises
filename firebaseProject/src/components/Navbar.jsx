import React from 'react'
import '../CSS/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'

function Navbar() {

    const navigate = useNavigate()

    const logout = async () => {
        toast.success("Logging out")
        setTimeout(() => {
            signOut(auth)
            navigate("/auth")
        }, 3000)


    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>Firebase</div>
            <div onClick={logout} className='navbar-right'>Exit</div>
        </div>
    )
}

export default Navbar