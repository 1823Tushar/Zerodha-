import React from 'react';

function Education() {
    return ( 
        <div className='max-w-6xl mx-auto px-5 mt-10'>
            <div className='flex flex-col md:flex-row gap-6 mt-6'>
                <div className='md:w-1/2 mx-auto'>
                <img src='media/Images/education.svg'/>
                </div>
                <div className='md:w-1/2'>
                <h1 className='mb-3 font-semibold text-5xl'> Free and open market education</h1>
                <p className='text-gray-600'>Varsity, the largest online stock market education book in the world
                    covering everything from the basics to advanced tarding 
                </p>
                <a href='' className='mt-4 inline-block '>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                
                 <p className='text-gray-600 mt-8'>Trading Q&A, the most active trading and investment community 
                in india  for all your market related queries </p> 

                <a href='' className='mt-4 inline-block '>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                
                
            </div>
        </div>
     );
}

export default Education;