import React from 'react'
import CalendarComponent from '../components/CalendarComponent'
import CalendarNotification from '../components/CalendarNotification'

const CalendarContainer = () => {

    const dataForTest = [
        {date: "05", title: "Matematica", description: "clase de matematica"},
        {date: "17", title: "Geometria", description: "clase de Geometria"},
        {date: "23", title: "Lengua", description: "clase de Lengua"},
        {date: "29", title: "Ingles", description: "clase de Ingles"},
    ]

    const markDate = [
        '04/06/2022',
        '03/06/2022',
        '05/06/2022',
        '12/06/2022',
        '09/06/2022',
        '25/06/2022'
    ]

  return (
    <aside>
        <h1>Actividades pendientes</h1>
        <CalendarComponent
        mark={markDate}
        />
        <CalendarNotification
        date={24}
        title={'Matematiica'}
        description={'Leccion 1'} />
    </aside>
  )
}

export default CalendarContainer
