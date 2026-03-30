import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductDetail from '../pages/ProductDetail';
import BasketPage from '../pages/BasketPage';

function RouterConfig() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />
            <Route path="/basket" element={<BasketPage />} />
        </Routes>

    )
}

export default RouterConfig