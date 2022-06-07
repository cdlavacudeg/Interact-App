import React, { useEffect } from "react";
import { useState } from "react";
import { login } from "../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// import "@styles/Login.css";

const Login = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    console.log(user);
    window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
    console.log(user)
  }, [dispatch]);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      dispatch(login({ email, password }));
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
