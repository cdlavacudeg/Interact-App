import '@styles/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '@components/Sidebar.jsx'
import Home from '@pages/Home.jsx';
import Materias from '@pages/Materias.jsx';
import Calificaciones from '@pages/Calificaciones.jsx';
import Perfil from '@pages/Perfil.jsx';
import Contacto from '@pages/Contacto.jsx';


import { useState, useEffect } from 'react';
import Login from './components/Login';

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const userLog = JSON.parse(loggedUserJSON)
      setUser(userLog)
    }
  }, [])


  const main = () => (

    <BrowserRouter>
    
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>} />
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
        <Login/> :
        main()
      }

    </div>
  );

}

export default App
