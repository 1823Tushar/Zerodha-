import React from 'react';

function Hero() {
    return (
        <div className= "max-w-5x1 mx-auto mt-6">
        <div className='row text-center '  >
           <img  src='media/Images/homeHero.png' alt='Hero Image'className='mb-5' />
           <h1 className='mt-8 mb-5 font-semibold text-5xl'>Invest  in everything</h1>
           <p className='mb-8'> Online platform to invest in stocks, derivatives, mutual funds, and more</p>
           <button style={{width:'20%', margin: '0 auto'}} className='bg-cyan-500 p-2 mb-5' >Sign up Now</button>
        </div> 
        </div>
      )
}

export default Hero;