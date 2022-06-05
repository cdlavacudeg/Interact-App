import React from 'react';
import Alert from './Alert';


const alertTest = [
    {
        alert: "Evaluacion 2/6/2022",
    },
    {
        alert: "Proyecto 5/6/22"
    },
    {
        alert: "Meet 10/6/2022"
    }

]


const Calendar = () => {
    return (
        <div className='calendar_section'>

            <p>Calendario Aqui</p>

            {
                alertTest.map((item, index) => (
                    <Alert key={index} tipo={"info"} message={item.alert}></Alert>
                ))
            }
            
            <Alert tipo={"error"} message={'error 404'}></Alert>
            <Alert tipo={"success"} message={'guardado'}></Alert>
        </div>
    );
};

export default Calendar;