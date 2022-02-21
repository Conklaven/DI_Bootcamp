import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'

const Login =({title}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    let navigate = useNavigate()

    useEffect(() =>{
        setMsg('')
    },[])
    const handleAction = async (id) => {
        console.log('handleAction', id)
        if (id === 'Register'){
            try {
                let response = await axios.post('http://localhost:5001/register',{
                    email,password
                },{
                    withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
            console.log('Register response', response)
            navigate('/login')

            } catch (error) {
                console.log('error', error)
                setMsg(error.response.data.msg)
                toast.error(error.response.data.msg )

            }
        }else if (id === 'Login'){
            try {
                let response = await axios.post('http://localhost:5001/login',{
                    email,password
                },{withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
                console.log('login response', response)
            navigate('/home')

            } catch (error) {
                console.log(error)
                setMsg(error.response.data.msg)
                toast.error(error.response.data.msg)
            }
        }
    }
    return(
        <>
        <div>
        <h1>{title} Form</h1>
        </div>
        <Box component="form"
        sx={{m:1}}
        noValidate
        autoComplete ="off">
            <TextField
            sx={{m:1}}
            id='email'
            label='Enter Email'
            variant='outlined'
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
            sx={{m:1}}
            id='password'
            label='Enter password'
            variant='outlined'
            onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Button variant="contained"
        // onClick={title=='Register'? handleAction()}
        onClick={()=>handleAction(title)}
        >{title}</Button>
        <div>{msg}</div>
        <div>{title==="Register" ? <Link to ='/login'>Login</Link>:<Link to ='/register'>Register</Link>}
        </div>
        </>
    )
}

export default Login;