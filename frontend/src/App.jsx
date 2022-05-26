import '@styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from '@components/Sidebar.jsx'
import Home from '@components/pages/Home.jsx';
import Materias from '@components/pages/Materias.jsx';
import Calificaciones from '@components/pages/Calificaciones.jsx';
import Perfil from '@components/pages/Perfil.jsx';
import Contacto from '@components/pages/Contacto.jsx';



const App = () => {


  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/calificaciones" element={<Calificaciones />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );

}

export default App
