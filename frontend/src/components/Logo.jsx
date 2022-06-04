import * as React from 'react'
import logoSVG from '@icons/logo.svg'
import '@styles/logo.css'

const Logo = () => {
  return (
    <div className='header-logo'>
        <img className='header-logo-img' src={logoSVG} alt="logo inteact" />
    </div>
  )
}

export default Logo