import React from 'react'

function Navigation({setCurrentPage}) {
  return (
    <ul>
        <li>
            <a href='#about' onClick={() => setCurrentPage('About')}>About</a>
        </li>
        <li>
            <a href='#portfolio' onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
        </li>
        <li>
            <a href='#resume' onClick={() => setCurrentPage('Resume')}>Resume</a>
        </li>
        <li>
            <a href='#contact' onClick={() => setCurrentPage('Contact')}>Contact</a>
        </li>
    </ul>
  )
}

export default Navigation