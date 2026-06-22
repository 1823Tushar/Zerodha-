import React from 'react';

function Hero() {
    return (
        <div className='max-w-6xl mx-auto  border-b border-gray-300 '>
            <div className=' text-center mt-10 p-3 '>
                <h1 className='   text-4xl text-semibold'>Technology</h1>
                <h3 className='text-gray-600 mt-3'>sleek,modern and intuitive trading platforms</h3>
                <p className='text-gray-600'>Check out our <a style={{color:"blue"}} >invetment offerings <i class="fa-solid fa-arrow-right"></i> </a> </p>

            </div>

        </div>
      );
}

export default Hero;