import React, { useState } from 'react'
import '../CSS/Header.css';
import { RiShoppingBasketFill } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket)

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
            <div className='flex-row' onClick={() => navigate("/")}>
                <img style={{ cursor: 'pointer' }} className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>Orange teak</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search' />
                <div>
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <RiShoppingBasketFill style={{ marginRight: '6px' }} className='icon' />
                    </Badge>

                    {theme ? <FaMoon className='icon' onClick={changeTime} /> : <CiLight className='icon' onClick={changeTime} />}
                </div>

            </div>
        </div>
    )
}

export default Header