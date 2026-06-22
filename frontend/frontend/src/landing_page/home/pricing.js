import React from 'react';

function Pricing() {
    return ( 
        <div className='max-w-6xl mx-auto px-5 mt-10'>
            <div className='flex flex-col md:flex-row gap-6 mt-6'>
                <div className='md:w-1/3'>
                <h1 className='mb-3 font-semibold text-5xl'>Unbeatable pricing</h1>
                <p className='text-gray-600'>we pioneered the concept of discount broking and price 
                    transparency in India. 
                </p>
                <a href='' className='mt-4 inline-block '>See pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                
                <div className='md:w-1/2 mx-auto'>
                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    <div className='flex-1 border border-gray-300 p-6 mx-5'>
                        <h1 className='mb-3 flex justify-center font-semibold text-2xl'>₹0</h1>
                        <p className='flex items-center justify-center'>Free equity delivery and<br></br> direct mutual funds</p>
                    </div>
                    <div className='flex-1   border border-gray-300    p-6'>
                          <h1 className=' mb-3 flex font-semibold text-2xl justify-center '>₹20</h1>
                        <p className='flex items-center justify-center'>Intraday and F&O</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;