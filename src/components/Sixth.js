import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Next() {
  return (
    <>
      <main className='sixth' data-aos="fade-up">
        <h1>
        GOAL OF ALAIGBO YOUTH SUMMIT
        </h1>
        <img src="svg.png" alt="" className='my-3 svg'/>
        <div className="subTxtSixth">
        The goal of AYF Summit is to change the
      political, Business and legal contexts in
      which Alaigbo is being developed. It is the
      job of policymakers, marketing advisors,
      and regulators to pay attention to
      stakeholder opinions and take them into
      account when making decisions since
      they are concerned about the problems
      that the South-East face.
        </div>
      </main>
    </>
  )
}

export default Next
