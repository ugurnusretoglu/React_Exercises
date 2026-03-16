import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../CSS/ProductDetails.css'
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }


    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    return (
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '40px' }}>
                <img src={image} width={300} height={500} alt='' />
            </div>
            <div>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <h1 className='price'>{price} $</h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <GoPlus onClick={increment} style={{ fontSize: '40px', marginRight: '10px', cursor: 'pointer' }} />  <span style={{ fontSize: '30px' }}>{count}</span>  <AiOutlineMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '10px', cursor: 'pointer' }} />
                </div>

                <div>
                    <button onClick={addBasket} className='cart-button'>Add to cart</button>
                </div>

            </div>


        </div>
    )
}

export default ProductDetails