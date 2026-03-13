import React, { useState } from 'react'
import '../CSS/Header.css';
import { RiShoppingBasketFill } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";



function Header() {

    const [theme, setTheme] = useState(false);

    const changeTime = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff"
        }
        else {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        }
        setTheme(!theme)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>Orange teak</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search' />
                <div>
                    <RiShoppingBasketFill className='icon' />
                    {theme ? <FaMoon className='icon' onClick={changeTime} /> : <CiLight className='icon' onClick={changeTime} />}
                </div>

            </div>
        </div>
    )
}

export default Header