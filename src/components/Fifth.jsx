import React from 'react'
import Logo from '../logo.png'

function infoFive() {
  return (
    <>
        <main className='infoFive mt-5'>
          <img src={Logo} alt="Logo" className='logo' />
          <div className="mainFifth">
            <h3 className='fw-bold mt-3'>Alaigbo Youth Forum (AYF)</h3>
            <p>
            is a nonprofit organization
            dedicated to reshaping the
            economic and political
            landscape of South Eastern
            Nigeria.
            </p>
          </div>
          <img src="line2.png" alt="" className='line2'/>
          <div className="subTxt">
            <h1>
            OUR GUIDING
            PRINCIPLES:
            </h1>
            <div className="principles">
           <ul>
            <li>
            ALAIGBO-FIRST
            </li>
            <li>
            HARDWORK
            </li>
            <li>
            INNOVATION
            </li>
            <li>
            COURAGE
            </li>
            <li>
            UNITY OF PURPOSE
            </li>
            <li>
            RESPECT
            </li>
            <li>
            SOLUTION-ORIENTED
            </li>
            <li>
            FOCUS
            </li>
           </ul>
            </div>
          </div>
        </main>
    </>
  )
}

export default infoFive