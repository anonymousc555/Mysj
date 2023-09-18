import React from 'react'
import Logo from '../logo.png'

function Info1() {
  return (
    <>
    <main className='infoOne'>
         <div className="logo-section">
          <img src={Logo} alt="Logo" className='logo' />
          <h2 className='sub fw-bolder'>ALAIGBO Youth Forum</h2>
          <p className='fw-bold fs-4'>PRESENTS</p>
        </div>
          <div className="mainTxt">
            <p className='fw-bold'>Alaigbo Youth Summit</p>
            <img src="line.png" alt="" />
            <span className='fw-bold subtxt'>
              Redefining the Economic and Political Landscape of South Eastern Nigeria 
            </span>
          </div>
    </main>
    </>
  )
}

export default Info1