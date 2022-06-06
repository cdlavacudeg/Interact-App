import React from 'react'
import { useDispatch } from 'react-redux';
import {Logout } from   '../redux/actions.js'

export const LogoutUser = () => {
   const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
    window.location.replace("/");
  };

  return (
    <Link onClick={logout} to='/'>
      LOGOUT{" "}
    </Link>
  );
}
