import React from 'react'
import '../CSS/RegisterPage.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { registerPageSchema } from '../schemas/RegisterPageSchemas';
import registerPageService from '../services/RegisterPageService';
import type { UserType } from '../types/Types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const navigate = useNavigate();

    const submit = async (values: any, actions: any) => {
        try {
            const payload: UserType = {
                username: values.username,
                password: values.password
            }
            const response = await registerPageService.register(payload)
            if (response) {
                clear();
                toast.success("User registered")
                navigate("/login");
            }
        } catch (error) {
            toast.error("User registration failed.")
        }
    }

    const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: submit,
        validationSchema: registerPageSchema
    });

    const clear = () => {
        resetForm();
    }

    return (
        <div className='register'>
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <TextField
                            sx={{ width: '300px', marginBottom: '25px' }}
                            id="username"
                            placeholder='Username'
                            value={values.username}
                            onChange={handleChange}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IoPersonCircleOutline style={{ width: '20px', height: '20px' }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            helperText={errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                            variant="standard"
                        />

                        <TextField
                            sx={{ width: '300px', marginBottom: '25px' }}
                            id="password"
                            placeholder='Password'
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CiLock style={{ width: '20px', height: '20px' }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            helperText={errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                            variant="standard"
                        />

                        <div>
                            <Button type='submit' size='small' sx={{ textTransform: 'none', height: '30px', marginRight: '10px' }} variant='contained' color='info'>Register</Button>
                            <Button onClick={clear} size='small' sx={{ textTransform: 'none', height: '30px' }} variant='contained' color='inherit'>Clear</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage