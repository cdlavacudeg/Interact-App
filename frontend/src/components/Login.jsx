import React from 'react';
import { useState} from 'react';
import loginService from '@services/login.js'
import toast, { Toaster } from 'react-hot-toast';
// import "@styles/Login.css"; 


const Login = () => {

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
        <div style={{ padding: "2rem", textAlign: "center" , marginTop: "2rem"}}>
            <div><Toaster
            position="top-right"
            reverseOrder={false}
            /></div>
            <form onSubmit={handleLogin}>
                <div>
                    Usuario
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={({ target }) => setemail(target.value)}
                    />
                </div>
                <div>
                    Contraseña
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">entrar</button>
            </form>
        </div>
    );
};

export default Login;