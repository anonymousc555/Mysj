import React from 'react'
import Logo from '../logo.png'

function Info1() {
  return (
    <>
    <main className='infoOne'>
         {/* <div className="logo-section">
          <img src={Logo} alt="Logo" className='logo' />
          <div className='logo-content'>
          <h2 className='sub fw-bolder'>ALAIGBO Youth Forum <span>PRESENTS</span></h2>
          </div>
        </div> */}
          <div className="mainTxt">
          <img src={Logo} alt="Logo" className='logo' />
            <p>Alaigbo Youth <span>Summit</span></p>
            <span>
              Redefining the Economic and Political Landscape of South Eastern Nigeria 
            </span>
            <img src="line.png" alt="" className='line'/>
          </div>
    </main>
    </>
  )
}

export default Info1
