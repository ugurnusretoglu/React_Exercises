import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/appSlice';
import { toast } from 'react-toastify';
import productService from '../services/ProductService';
import type { ProductType } from '../types/Types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { addProductToBasket } from '../redux/basketSlice';


function ProductDetail() {

    const { productId } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState<ProductType | null>();

    const [count, setCount] = useState<number>(0);

    const increase = () => {
        if (count < 10) {
            setCount(count + 1)
        }
        else {
            toast.warning("You can purchase a maximum of 10 items at a time.")
        }
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const getProductById = async (productId: number) => {
        try {
            dispatch(setLoading(true))
            const product: ProductType = await productService.getProductById(productId);
            setProduct(product)
        } catch (error) {
            toast.error("An error occurred while delivering the product." + error)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    const addBasket = () => {
        if (product) {
            if (count > 0) {
                const payload: ProductType = {
                    ...product,
                    count: count
                }
                dispatch(addProductToBasket(payload));
            }
            else {
                toast.warning("You must select the quantity of products.")
            }
        }
    }

    useEffect(() => {
        getProductById(Number(productId));
    }, [])


    return (
        <Container maxWidth={'lg'}>
            {product && <>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '60px' }}>
                    <div>
                        <img src={product.image} width={250} height={400} />
                    </div>
                    <div style={{ marginTop: '60px', marginLeft: '60px' }}>
                        <div style={{ fontFamily: 'monospace', fontSize: '20px' }}>{product.title}</div>
                        <div style={{ fontFamily: 'monospace', fontSize: '16px', marginTop: '25px', height: '100px' }}>{product.description}</div>
                        <div style={{ fontFamily: 'monospace', fontSize: '30px', fontWeight: 'bold' }}>{product.price}$</div>

                        <div style={{ marginTop: '30px' }}>
                            <AddIcon onClick={increase} sx={{ backgroundColor: 'black', color: '#fff', marginRight: '15px', cursor: 'pointer' }} />
                            <span style={{ fontSize: '30px', fontFamily: 'monospace', }}>{count}</span>
                            <RemoveIcon onClick={decrease} sx={{ backgroundColor: 'black', color: '#fff', marginLeft: '15px', cursor: 'pointer' }} />
                        </div>

                        <div>
                            <Button onClick={addBasket} color='warning' variant='contained' size='medium' sx={{ textTransform: 'none', marginTop: '35px' }}>Add Card</Button>
                        </div>

                    </div>
                </div>

            </>
            }
        </Container>
    )
}

export default ProductDetail