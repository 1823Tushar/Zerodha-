import React from 'react';

function OpenAccount() {
    return ( 
      <div>
         <div className= "max-w-5x1 mx-auto" >
        <div className='row text-center'  >
           <img  src='media/images/homeHero.png' alt='Hero Image'className='mb-5' />
           <h1 className='mt-5 mb-5 font-semibold text-5xl'>Open a Zerodha account</h1>
           <p className='mb-8'> Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
           <button style={{width:'20%', margin: '0 auto'}} className='bg-cyan-500 p-2 mb-5' >Sign up Now</button>
        </div> 
        </div>
      </div>
     );
}

export default OpenAccount;