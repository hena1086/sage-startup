import React from 'react'
import Sage from './sage.jpg'

const Head = () => {
  return (
    <>
        <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          
            {/* <h1><img src={Sage} alt=" "  /> SAGE TRAINING INSTUTUTE</h1> */}
            <h1>SAGE TRAINING INSTUTUTE</h1>
            <span>ONLINE EDUCATION & LEARNING ACADAMY</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head