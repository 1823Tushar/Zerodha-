import React from 'react';

function Hero() {
    return (
        <div className= "max-w-5xl mx-auto mt-20">
        <div className='flex flex-col text-center mt-6 mb-7 '  >
           <h1 className='font-bold text-3xl mb-4'>Pricing</h1>
           <p>Free equity investments and flat ₹20 traday and F&O trades </p>
        </div> 
        <div className='flex flex-row mt-5 text-center' >
            <div className='flex-1 p-5'>
           <img src='./media/Images/pricingEquity.svg'  />
           <h4 className='font-bold mb-3'>Free equity delivery</h4>
           <p className='text-gray-600'> All equity delivery investments (NSE, BSE),
            are absolutely free -- ₹ 0 brokerage,
           </p>
            </div>
            <div className='flex-1 p-5'>
                <img src='./media/Images/intradayTrades.svg'  />
           <h4 className='font-bold mb-3'>Intraday and F&O trades</h4>
           <p className='text-gray-600'> Flat Rs 20 or 0.03%(whichever is lower)
            per executed order on intraday trades across equity, currency and commodity 
            trades.
           </p>

            </div>
            <div className='flex-1 p-5'>
                <img src='./media/Images/pricingMF.svg'  />
           <h4 className='font-bold mb-3'>Free direct MF</h4>
           <p className='text-gray-600'> All direct mutual fund investments are absolutely 
            free -- Rs 0 commission & DP charges.
           </p>

            </div>
        </div>
        </div>
      )
}

export default Hero;