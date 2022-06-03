import React, { useEffect } from "react";
import { useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import loginService from '@services/login.js'
import toast, { Toaster } from 'react-hot-toast';
import Logo from "@components/Logo";
import "@styles/Login.css";
import { getUser } from '../Redux/actions';


const Login = () => {
    const dispatch = useDispatch()
      useEffect(() => {
        dispatch(getUser());
      }, [dispatch]);

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                email, password,
            })
            setUser(user)
            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
            )
            window.location.reload();
            setemail('')
            setPassword('')
        } catch (exception) {
            toast.error("This didn't work.", {
                style: {
                  border: '1px solid tomato',
                  padding: '16px',
                  color: 'black',
                },
                iconTheme: {
                  primary: 'tomato',
                  secondary: '#FFFAEE',
                },
              });
        }
    }

    return (
      <div className="container_input">
        <div>
          <Toaster position='top-right' reverseOrder={false} />
        </div>
            <div className="container_logo">
            <img src={Logo} alt="" clsss="logo" />
        </div>
        <div className="container_titulo">
            <h1>
                El conocimiento te traer&aacute la oportuniddad de hacer la diferencia 
            </h1> 
        </div>
        <form onSubmit={handleLogin} className='container_login'>
          <div className='container_datos'>
            Usuario
            <input type='text' value={email} name='email' onChange={({ target }) => setemail(target.value)} />
          </div>
          <div className='container_datos'>
            Contraseña
            <input type='password' value={password} name='Password' onChange={({ target }) => setPassword(target.value)} />
          </div>
          <button className='buttons' type='submit'>
            entrar
          </button>
        </form>
      </div>
    );
};

export default Login;