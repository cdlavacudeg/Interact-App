import React from 'react';
import biologia from '@img/biologia.png'
import Geografia from '@img/Geografia.png'
import Historia from '@img/Historia.png'
import Informatica from '@img/Informatica.png'
import Ingles from '@img/Ingles.png'
import Literatura from '@img/Literatura.png'
import Matematicas from '@img/Matematicas.png'
import FisicoQuimica from '@img/Fisico-Quimica.png'
import { useNavigate } from 'react-router-dom';

const Materias = () => {
    const navigate = useNavigate()

    const materias = [
        {
            materia: "Biologia",
            nameProf: "Prof. Laura Valenzuela",
            img: biologia
        },
        {
            materia: "FisicoQuimica",
            nameProf: "Prof. Mariela Hernandez",
            img: FisicoQuimica
        },
        {
            materia: "Geografia",
            nameProf: "Prof. Adriana Marquez",
            img: Geografia
        },
        {
            materia: "Historia",
            nameProf: "Prof. Pablo Mariani",
            img: Historia
        },
        {
            materia: "Informatica",
            nameProf: "Prof. Fernanda Sosa",
            img: Informatica
        },

        {
            materia: "Ingles",
            nameProf: "Prof. Montes de Oca",
            img: Ingles
        },
        {
            materia: "Literatura",
            nameProf: "Prof. Ramiro Flores",
            img: Literatura
        },
        {
            materia: "Matematicas",
            nameProf: "Prof. Jorge Perez",
            img: Matematicas
        },


    ]


    return (
        <div >
            <h1>Mis materias</h1>




            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    materias.map((item, index) => (
                        <div onClick={() => navigate(`/materias/${item.materia}`)} key={index} className="materia col-sm-6 col-md-4 col-6 " >

                            <div className="card cardMaterias">
                                <img src={item.img} className="card-img-top" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.materia}</h5>
                                    <p className="card-text">{item.nameProf}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Materias;