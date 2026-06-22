import React from 'react';

function UniversePage() {
    return (
        <div className='max-w-6xl mx-auto mt-20'  >
            <div >
                <h1 className=' text-center  font-bold text-3xl mb-5'>The Zerodha Universe</h1>
                   <p className='text-center'>Extend your trading and investment experience further with our platform</p>
                   </div>
                   {/* 1st row 3 logo */}
            <div className=' max-w-4xl  mx-auto grid grid-cols-3 p-6 gap-5 mt-6'>
          <div className='text-center'> 
            <img src='..\media\Images\smallcaseLogo.png' />
            <p className='text-gray-600'> Thematic Investment platform</p>
          </div>
          
          <div  className='text-center' >
            <img src='..\media\Images\StreakLogo.png' />
            <p className='text-gray-600'> Algo & strategy platform </p>
          </div>

          <div  className='text-center'>
            <img src='..\media\Images\sensibullLogo.svg' />
            <p className='text-gray-600'> Options trading platform</p>
          </div>
          {/* 2nd row 3 logo  */}
          
            </div >
              <div className=' max-w-4xl  mx-auto grid grid-cols-3 p-6 gap-5 mt-6'>
          <div  className='text-center'>
            <img src='..\media\Images\ZerodhaFundhouse.png' />
            <p className='text-gray-600'> Thematic Investment platform</p>
          </div>
          
          <div  className='text-center'>
            <img src='..\media\Images\goldenpiLogo.png' />
            <p className='text-gray-600'> Algo & strategy platform </p>
          </div>

          <div  className='text-center'>
            <img src='..\media\Images\dittoLogo.png' />
            <p className='text-gray-600'> Options trading platform</p>
          </div>
          
            </div>
            
           <div className='flex justify-center mt-6'>
       <button  className='bg-cyan-500 p-2 mb-5 ' >Signup Now</button>
       </div>
        </div>
      );
}

export default UniversePage;