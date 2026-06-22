import React from 'react';

function Team() {
    return (
        <div className=' max-w-6xl mx-auto  mt-10 border-t border-gray-200' >
            <div className='flex flex-row p-5 mt-5 mb-5'>
                <h1 className='mx-auto  text-4xl text-semibold'>People</h1>
            </div>
            <div className='flex flex-col md:flex-row p-5 '>
                <div className='flex-1  '>
                    <img src='media/Images/nithinKamath.jpg' className='rounded-full w-70 mx-auto' />
                    <h1 className='mt-3 text-center text-lg text-gray-600'>Nithin Kamath</h1>
                    <h6 className='mt-1 text-center text-sm text-gray-600'>Founder, CEO</h6>
                </div>
                <div className='flex-1 space-y-5  text-gray-600 p-5 '>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a href=""  style={{color:"blue"}} >Homepage</a> / <a href=""  style={{color:"blue"}}>TradingQnA</a> /{" "}
                        <a href=""  style={{color:"blue"}}>Twitter</a>
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Team;