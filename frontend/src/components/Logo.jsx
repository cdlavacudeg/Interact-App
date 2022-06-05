import { NavLink } from 'react-router-dom'
import logoSVG from '@icons/logo.svg'
import '@styles/logo.css'

const Logo = () => {
  return (
    <div className='header-logo'>
      <NavLink to='/'>
        <img className='header-logo-img' src={logoSVG} alt="logo inteact" />
      </NavLink>
    </div>
  )
}

export default Logo