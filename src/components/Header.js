import React from 'react';
import Navigation from './Navigation';

function Header({setCurrentPage}) {
  return (
    <div>
      <Navigation setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Header