import React from 'react'
import '../CSS/Product.css'

function Product({ product }) {
    const { id, price, image, title, decription } = product;
    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '75px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price} $</h3>
            </div>
            <div className='flex-row'>
                <button className='detail-button'>Go to details</button>
            </div>
        </div>
    )
}

export default Product