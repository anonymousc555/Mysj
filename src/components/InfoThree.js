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
          <div className="aboutUs" id='aboutUs'>
            <div className="logo-section">
            <img src={Logo} alt="Logo" className='logo' />
            <h2 className='sub fw-bolder'>About Us</h2>
            </div>
            <div className="others">
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
            <div className='infoFour mt-5'>
        <img src="idea.png" alt="" className='idea'/>
        <h1 className='mt-3 fw-bold'>Our Strategy</h1>
        <span className='mt-2'>
        Harnessing the energy of the
        younger generation while learning
        from the experiences of the older
        generation, to build an Alaigbo that
        future generations will be proud to
        inherit.
        </span>
        </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default InfoThree