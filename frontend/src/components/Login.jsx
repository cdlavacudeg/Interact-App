import React from "react";
import { useState } from "react";
import { login } from "../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
// import "@styles/Login.css";

const Login = () => {
  const dispatch = useDispatch()
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [User, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userData = dispatch(login({email, password}))
      .then((data) => {    
        setUser(data.payload.data);
        setemail("");
        setPassword("");
        return User
      })
      .then((user) => {
        window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
        window.location.reload();
      })
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
