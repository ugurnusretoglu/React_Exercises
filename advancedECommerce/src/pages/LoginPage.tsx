import '../CSS/RegisterPage.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { registerPageSchema } from '../schemas/RegisterPageSchemas';
import '../CSS/LoginPage.css'
import loginPageService from '../services/LoginPageService';
import { useDispatch } from 'react-redux';
import type { UserType } from '../types/Types';
import { setCurrentUser, setLoading } from '../redux/appSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface CheckUserType {
    result: boolean,
    currentUser: UserType | null
}

function LoginPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkUser = (userList: UserType[], username: string, password: string): CheckUserType => {
        const response: CheckUserType = { result: false, currentUser: null }
        userList.forEach((user: UserType) => {
            if (user.username === username && user.password === password) {
                response.result = true;
                response.currentUser = user;
            }
        })

        return response;
    }

    const submit = async (values: any, action: any) => {
        try {
            dispatch(setLoading(true))
            const response: UserType[] = await loginPageService.login();
            if (response) {
                const checkUserResponse: CheckUserType = checkUser(response, values.username, values.password);
                if (checkUserResponse.result && checkUserResponse.currentUser) {
                    dispatch(setCurrentUser(checkUserResponse.currentUser));
                    localStorage.setItem("currentUser", JSON.stringify(checkUserResponse.currentUser))
                    navigate("/")

                }
                else {
                    toast.error("Username or password is incorrect.")
                }
            }
        } catch (error) {
            toast.error("Login failed")
        }
        finally {
            dispatch(setLoading(false))
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
        <div className='login'>
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
                            <Button type='submit' size='small' sx={{ textTransform: 'none', height: '30px', marginRight: '10px' }} variant='contained' color='info'>Log in</Button>
                            <Button onClick={clear} size='small' sx={{ textTransform: 'none', height: '30px' }} variant='contained' color='inherit'>Clear</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage