import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logoImage from '../images/logoImage.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProducts, setCurrentUser, setLoading, setProducts } from '../redux/appSlice';
import { toast } from 'react-toastify';
import productService from '../services/ProductService';
import type { ProductType } from '../types/Types';

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("currentUser");
        dispatch(setCurrentUser(null))
        navigate("/login")
    }

    const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.value) {
                dispatch(filterProducts(e.target.value))
            }
            else {
                const products: ProductType[] = await productService.getAllProducts();
                dispatch(setProducts(products));
            }
        } catch (error) {
            toast.error("An error occurred during filtering." + error);
        }
    }

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#786F1A' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logoImage} width={60} height={60} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Orange Teak
                    </Typography>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextField
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(e)}
                            sx={{ width: '300px', marginBottom: '25px', marginRight: '20px' }}
                            id="searchInput"
                            placeholder='Search...'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">

                                        </InputAdornment>
                                    ),

                                    style: {
                                        color: 'lightgrey',
                                        borderBottom: '1px solid lightwhite'
                                    }
                                },
                            }}
                            variant="standard"
                        />

                        <Button onClick={logout} sx={{ textTransform: 'none', color: 'lightwhite' }} color="inherit">Exit</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar