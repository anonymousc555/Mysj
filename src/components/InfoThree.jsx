import React from 'react'
import Logo from '../logo.png'

function InfoThree() {
  return (
    <>
        <main className='infothree'>
            <div className="logo-section">
            <img src={Logo} alt="Logo" className='logo' />
            <h2 className='sub fw-bolder'>About Us</h2>
            </div>
            <div className="mission">
                <h4 className=''>Our Mission:</h4>
                <p className='fw-bold'>
                To promote sustainable
                development through engagement
                and advocacy.
                </p>
            </div>
            <div className="vision">
                <h4 className=''>Our Vision:</h4>
                <p className='fw-bold'>
                To create an Alaigbo where every Igbo person
                considers living, working, and doing business
                as a top priority before anywhere else in the
                world.
                </p>
            </div>
        </main>
    </>
  )
}

export default InfoThree