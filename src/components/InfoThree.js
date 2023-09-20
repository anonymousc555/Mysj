import React, { useEffect } from 'react'
import Logo from '../logo.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import  {} from ""

function InfoThree() {
  // gsap.registerPlugin(ScrollTrigger)
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger:".aboutUs",
  //     start:"top top",
  //     end:"bottom bottom",
  //     pin:".logo-section"
  //   })
  // }, [])
  

  return (
    <>
        <main className='infothree'>
          <div className="about-us" id='aboutUs'>
            {/* <div className="logo-section"> */}
            {/* <img src={Logo} alt="Logo" className='logo' /> */}
            <h2>About Us</h2>
            {/* </div> */}
            <div className="others">
            <div>
                <h4>Our Mission:</h4>
                <p>
                To promote sustainable
                development through engagement
                and advocacy.
                </p>
            </div>
            <div>
                <h4>Our Vision:</h4>
                <p>
                To create an Alaigbo where every Igbo person
                considers living, working, and doing business
                as a top priority before anywhere else in the
                world.
                </p>
            </div>
            <div className='strategy'>
        <h4>Our Strategy</h4>
        <p>
        Harnessing the energy of the
        younger generation while learning
        from the experiences of the older
        generation, to build an Alaigbo that
        future generations will be proud to
        inherit.
        </p>
        </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default InfoThree
