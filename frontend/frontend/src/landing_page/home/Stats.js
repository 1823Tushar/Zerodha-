import React from 'react';

function Stats() {
    return (  
        <div className='max-w-5*1 mx-auto px-15 mt-10'>
            <div className='flex flex-col md:flex-row gap-12'>
               <div className='md:w-1/2 space-y-6  ' >
              <h1 className='font-bold mt-3 mb-12 text-4xl' > Trust with confidence </h1>

              <h2 className='font-semibold  mb-3 text-lg' >Customer-first always</h2>

              <p className='text-gray-600 mb-6 leading-relaxed'>That's why 1.3+ crore customers trust Zerodha with 3.5+
                lakh crores worth of equity investments.
              </p>
              <h2 className='font-semibold  mb-3 text-lg'  >No spam or gimmicks</h2>

              <p className='text-gray-600 mb-6 leading-relaxed'>No gimmicks, spam, "gamification", or annoying push
                notification. High quality apps that you use at your pace, the 
                way you like.
              </p>

              

              <h2 className='font-semibold  mb-3 text-lg'  >The Zerodha universe</h2>
              <p className='text-gray-600 mb-6 leading-relaxed'>
               Not just an app, but a whole ecosystem. Our investments in 
               30+ fintech startups offer you tailored services specific
                to your needs.
              </p>
              
              <h2 className='font-semibold  mb-3 text-lg'  >Do better with money</h2>
              <p className='text-gray-600 mb-6 leading-relaxed'>Not just an app, but a whole ecosystem. Our investments in 
                30+ fintech startups offer you tailored services specific to
                your needs.
              </p>

               </div>
               <div className='w-1/2'>
                <img src='media/Images/ecosystem.png' className='w-full max-w-md mx-auto' />
                <div className=' ml-30  mt-4 ' >
                    <a href='' className='mx-5 '>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href=''>Try kite demo</a>
                </div>
               </div> 
            </div>
        </div>
    );
}

export default Stats;