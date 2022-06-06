import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import '@styles/alert.css';


const Alert = ({ message, tipo }) => {

    const notifyInfo = () => toast.success(`${message}`, {
        duration: 5000,
        className: 'info',
        icon: '✍'
    });
    const notifyError = () => toast.error(`${message}`, {
        duration: 5000,
        className: 'error',
    });
    const notifySuccess = () => toast.success(`${message}`, {
        duration: 5000,
        className: 'success',
    });

    useEffect(() => {
        if (tipo === 'error') {
            notifyError()
        } else if (tipo === 'info') {
            notifyInfo()
        } else {
            notifySuccess()
        }
    }, [])

    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={true}
            /></div>
    )
}

export default Alert