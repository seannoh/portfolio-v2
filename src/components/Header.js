import React from 'react';
import Navigation from './Navigation';

function Header({setCurrentPage}) {
  return (
    <Navigation setCurrentPage={setCurrentPage}/>
  )
}

export default Header