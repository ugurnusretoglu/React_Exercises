import Navbar from '../components/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import Container from '@mui/material/Container';
import '../App.css'
import { useEffect } from 'react';
import { calculateBasket, removeProductFromBasket, setBasket } from '../redux/basketSlice';
import { AiFillDelete } from "react-icons/ai";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import type { UserType } from '../types/Types';
import { updateBalance } from '../redux/appSlice';

function BasketPage() {

    const { currentUser } = useSelector((state: RootState) => state.app);
    const { basket, totalAmount } = useSelector((state: RootState) => state.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBasket());
    }, [basket])

    const removeProduct = (productId: number) => {
        dispatch(removeProductFromBasket(productId));
    }

    const buyNow = () => {
        if (currentUser?.balance && currentUser.balance < totalAmount) {
            toast.warn("Your balance is insufficient.");
        }
        if (currentUser?.balance) {
            const remaningTotal = currentUser.balance - totalAmount;

            const payload: UserType = {
                ...currentUser,
                balance: remaningTotal
            }
            dispatch(updateBalance(payload));
            dispatch(setBasket([]));
            localStorage.removeItem("basket")
            toast.success("The products were successfully purchased.");
        }
    }

    return (
        <div>
            <Navbar />

            <Container maxWidth="lg">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="center">Count</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket && basket.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={product.image} width={100} height={150} />
                                </TableCell>
                                <TableCell align="left">{product.title}</TableCell>
                                <TableCell align="center">{product.count}</TableCell>
                                <TableCell align="center">{product.price}$</TableCell>
                                <TableCell align="center"><Button onClick={() => removeProduct(product.id)} variant='contained' color='success' startIcon={<AiFillDelete />}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={1} />
                            <TableCell rowSpan={1} />
                            <TableCell colSpan={1} align='center' sx={{ fontWeight: 'bold' }}>Total:</TableCell>
                            <TableCell colSpan={1} align='center' sx={{ fontWeight: 'bold' }}>{totalAmount}</TableCell>
                            <TableCell align='center'><Button onClick={buyNow} sx={{ color: '#fff' }} color='primary' size='small' variant='contained'>Buy Now</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
        </div>
    )
}

export default BasketPage