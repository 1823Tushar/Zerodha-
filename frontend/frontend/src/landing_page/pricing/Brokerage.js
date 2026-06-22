import React from 'react';

function Brokerage() {
    return (
        <div className="max-w-7xl mx-auto mt-20 border-t boder-gray-600" >

            <div className='flex flex-col md:flex-row text-center '>
                <div className='flex-1'>
                    <a href=''><h3 className='font-bold text-2xl text-blue-600'>Brokerage calculator</h3>
                    </a>
                      <ul className='list-disc pl-6 text-left ml-12 text-gray-600'>
                    <li>Call & trade and RMS auto-squareoff: Additional charges of Rs50 + GST per order.</li>
                    <li>Digital contract notes will sent via e-mail</li>
                    <li>Physical copies of contract notes, if required, shall be charges Rs20 per contract note. courier charges apply</li>
                    <li>For NRI account (non-PIS), 0.5% or Rs 100 per executed order for equity (Whichever is lower)</li>
                    <li>For NRI accounts (PIS), 0.5% or Rs 200 per executed order for equity (Whichever is lower)</li>
                    <li>if the account is in debit balance, any order places will be charged Rs40 per executed order instead of Rs 20 per executed order</li>
                 </ul>
                </div>
                <div flex-1>
                    <a href=''>  <h3 className='font-bold text-2xl text-blue-600'>List of charges</h3>
                    </a>
                </div>
            </div>


        </div>
    );
}

export default Brokerage;