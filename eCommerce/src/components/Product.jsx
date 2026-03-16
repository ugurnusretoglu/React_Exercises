import React from 'react'
import '../CSS/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title, description } = product;

    //useNavigate()
    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '75px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price} $</h3>
            </div>
            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Go to details</button>
            </div>
        </div>
    )
}

export default Product