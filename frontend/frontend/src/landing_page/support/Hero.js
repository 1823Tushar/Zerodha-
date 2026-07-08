import React from 'react';

function Hero() {
    return (
        <div className=' ' id='supportHero'>
            <div className=' max-w-4xl mx-auto  text-white flex  justify-between '>
                <div className='flex-1 mt-3 mb-8' >
                    <h1 className='text-lg'>Support Portal </h1>
                  <h1 className='text-xl mt-11'>  Search for an answer or browse help topics <br/>to create a ticket</h1>
                  <br />

                 <input placeholder='Eg. how do I activate F&o , why is my order getting rejected. ' 
                   className="w-2/3 p-3 text-black bg-white rounded" />
                <br />
                <div className='space-x-3 mt-3 underline'>
                <span>Track account opening</span>
                <span>Track segment activation</span>
                <span>Intraday </span>
                <span></span>
                <span>margins</span>
                <span>  Kite user manual </span>
                </div>
                </div>
                <div className=' mr-15 mt-3 space-y-4'>
                    <span className='ml-70   text-lg'>Track ticket</span> 
                   <h1 className='text-xl mt-12'> Featured</h1>
                   <div className=''>
                   <ol className='list-decimal underline'>
                    <li><span>Current Takeovers and Delisting - january 2024 </span></li>
                    <li><span>Latest Intraday leverages - Mis & CO</span></li>
                   </ol>
                   </div>
                    </div>

</div>
        </div>
    );
}
export default Hero;