import React from 'react'
import Logo from '../logo.png'

function Last() {
  return (
    <>
    <main className='last'>
          <img src={Logo} alt="Logo" className='logo mt-5' />
          <h1 className='mt-5'>
          ALAIGBO
          YOUTH SUMMIT
          </h1>
          <div className="venue">
            <p className='loc'>
            THE AHIAJOKU CENTRE,
            OWERRI, IMO STATE
            </p>
            <p className="time">
            DECEMBER 18-19, 2023
            </p>
          </div>
    </main>
    </>
  )
}

export default Last