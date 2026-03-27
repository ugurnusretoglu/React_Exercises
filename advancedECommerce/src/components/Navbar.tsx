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
import { setCurrentUser } from '../redux/appSlice';

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("currentUser");
        dispatch(setCurrentUser(null))
        navigate("/login")
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