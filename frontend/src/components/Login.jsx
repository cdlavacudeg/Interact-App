import React, { useEffect } from "react";
import { useState} from 'react';
import { useDispatch} from "react-redux";
import { postLogin} from '../redux/actions'
import {validation} from '../validation/validation-Login.jsx'
import toast, { Toaster } from 'react-hot-toast';
import Logo from "@components/Logo";
import loginService from "@services/login.js";


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const users = postLogin({
        email,
        password,
      });
      setUser(users);
      window.localStorage.setItem("loggedAppUser", JSON.stringify(user));

      setemail("");
      setPassword("");
    } catch (exception) {
      toast.error("This didn't work.", {
        style: {
          border: "1px solid tomato",
          padding: "16px",
          color: "black",
        },
        iconTheme: {
          primary: "tomato",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
      <div>
        <Toaster position='top-right' reverseOrder={false} />
      </div>
      <form onSubmit={handleLogin}>
        <div>
          Usuario
          <input type='text' value={email} name='email' onChange={({ target }) => setemail(target.value)} />
        </div>
        <div>
          Contraseña
          <input type='password' value={password} name='Password' onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button type='submit'>entrar</button>
      </form>
    </div>
  );
};
export default Login;