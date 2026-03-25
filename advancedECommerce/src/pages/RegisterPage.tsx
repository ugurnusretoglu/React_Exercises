import React from 'react'
import '../CSS/RegisterPage.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Button from '@mui/material/Button';

function RegisterPage() {
    return (
        <div className='register'>
            <div className='main'>
                <form>
                    <div className='form-div'>
                        <TextField
                            sx={{ width: '300px', marginBottom: '25px' }}
                            id="username"
                            placeholder='Username'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IoPersonCircleOutline style={{ width: '20px', height: '20px' }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                        />

                        <TextField
                            sx={{ width: '300px', marginBottom: '25px' }}
                            id="password"
                            placeholder='Password'
                            type='password'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CiLock style={{ width: '20px', height: '20px' }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                        />

                        <div>
                            <Button size='small' sx={{ textTransform: 'none', height: '30px', marginRight: '10px' }} variant='contained' color='info'>Register</Button>
                            <Button size='small' sx={{ textTransform: 'none', height: '30px' }} variant='contained' color='inherit'>Clear</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage