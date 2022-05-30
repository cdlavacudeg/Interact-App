import '@styles/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from '@components/Sidebar.jsx'
import Home from '@pages/Home.jsx';
import Materias from '@pages/Materias.jsx';
import Calificaciones from '@pages/Calificaciones.jsx';
import Perfil from '@pages/Perfil.jsx';
import Contacto from '@pages/Contacto.jsx';
import loginService from './services/login';
import Notification from '@components/Notification.jsx';

const App = () => {

  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

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
      setemail('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('fail')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const login = () => (


    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Notification message={errorMessage} />
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

  )

  const main = () => (

    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home name={email} />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/calificaciones" element={<Calificaciones />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

  )

  return (
    <div>

      {user === null ?
        login() :
        main()
      }

    </div>
  );

}

export default App
