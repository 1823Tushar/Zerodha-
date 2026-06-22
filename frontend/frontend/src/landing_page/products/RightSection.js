import React from 'react';

function RightSection( {imageURL,
    productName,
    productDescription,
  learnMore,
   } ) {
    return (  
        <div className='max-w-6xl mx-auto  '>
            <div className='flex flex-col md:flex-row '>
                
                <div className='flex-1 mt-30 p-10 ml-5 '>
                    <h1 className='text-4xl text-semibold'>{productName}</h1>
                    <p className='text-gray-600 mt-3 mb-3'>{productDescription}</p>
                    <div className='flex flex-row ' style={{color:"blue"}}>
                        <a href={learnMore} className=''>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                <div className='flex-1 p-5'>
                    <img src={imageURL} />
                </div>
            </div> 

        </div>
      
    );
}

export default RightSection;