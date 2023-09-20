import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Next() {
  return (
    <>
      <main className='sixth' data-aos="fade-up">
        {/* <img src="svg.png" alt=""/> */}
        <div className="sub-txt-sixth">
        <h1>
        GOAL OF ALAIGBO <br /> YOUTH SUMMIT
        </h1>
          <p>
        The goal of AYF Summit is to change the
      political, Business and legal contexts in
      which Alaigbo is being developed. It is the
      job of policymakers, marketing advisors,
      and regulators to pay attention to
      stakeholder opinions and take them into
      account when making decisions since
      they are concerned about the problems
      that the South-East face.
          </p>
        </div>
      </main>
    </>
  )
}

export default Next
