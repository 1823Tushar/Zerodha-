import React from 'react';

function NotFound() {
    return ( 
      <div>
         <div className= "max-w-5x1 mx-auto" >
        <div className='row text-center'  >
           {/* <img  src='media/images/homeHero.png' alt='Hero Image'className='mb-5' /> */}
           <h1 className='mt-5 mb-5 font-semibold text-5xl'>404 NOT FOUND</h1>
           <p className='mb-8'> Sorry, the page you are looking for does not exist </p>
           {/* <link to={"/Awards"}> */}
           <button style={{width:'20%', margin: '0 auto'}} className='bg-cyan-500 p-2 mb-5' >Go Home</button>
           {/* </link> */}
           
        </div> 
        </div>
      </div>
     );
}

export default NotFound;