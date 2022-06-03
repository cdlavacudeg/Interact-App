import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const Alert = ({ message }) => {

    const notify = () => toast.success(`${message}`, {
        duration: 5000,
        style: {
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#efb365',
            padding: '0.5em 3em',
            color: 'black',
            width:'100%',
            
        },
        icon: '✍'
    });

    useEffect(() => {

        notify()

    }, [])

    return (
        <div><Toaster
            position="top-right"
            reverseOrder={true}
        /></div>
    )
}

export default Alert