import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function infoFive() {
  return (
    <>
        <main className='infoFive' data-aos="fade-up">
          <div className="mainFifth">
            <h3 className='fw-bold mt-3 text-center'>Alaigbo Youth Forum (AYF)</h3>
            <p>
            is a nonprofit organization
            dedicated to reshaping the
            economic and political
            landscape of South Eastern
            Nigeria.
            </p>
          </div>
          <div className="subTxt"  data-aos="fade-up">
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