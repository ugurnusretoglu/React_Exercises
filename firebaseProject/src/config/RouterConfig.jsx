import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

function RouterConfig() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>

    )
}

export default RouterConfig