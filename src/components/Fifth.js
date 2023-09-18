import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function infoFive() {
  return (
    <>
        <main className='info-five' data-aos="fade-up">
          <div className="main-fifth">
            <h3>Alaigbo Youth Forum (AYF)</h3>
            <p>
            is a nonprofit organization
            dedicated to reshaping the
            economic and political
            landscape of South Eastern
            Nigeria.
            </p>
          </div>
          <div className="sub-txt"  data-aos="fade-up">
            <h3>
            OUR GUIDING
            PRINCIPLES:
            </h3>
            <div className="principle">
           <ul>
            <li>
            ALAIGBO-First
            </li>
            <li>
            Hardwork
            </li>
            <li>
            Innovation
            </li>
            <li>
            Courage
            </li>
            <li>
            Unity of purpose
            </li>
            <li>
            Respect
            </li>
            <li>
            Solution-Oriented
            </li>
            <li>
            Focus
            </li>
           </ul>
            </div>
          </div>
        </main>
    </>
  )
}

export default infoFive
