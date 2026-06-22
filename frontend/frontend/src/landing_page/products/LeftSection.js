import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row '>
                <div className='flex-1 mr-5 p-10'>
                    <img src={imageURL} />
                </div>
                <div className='flex-1 ml-10  p-20 '>
                    <h1 className='text-4xl text-semibold'>{productName}</h1>
                    <p className='text-gray-600 mt-3 mb-3'>{productDescription}</p>
                    <div className='flex flex-row ' style={{color:"blue"}}>
                        <a href={tryDemo} >Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} className='ml-10'>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
            
                    <div className=' flex flex-row mt-2'>
                    <a href={googlePlay}>
                        <img src='media/Images/googlePlayBadge.svg'/>
                    </a>
                    <a href={appStore} className='ml-10'>
                        <img src='media/Images/appStoreBadge.svg'/>
                    </a>
                    </div>
                </div>
            </div> 

        </div>
      
     );
}

export default LeftSection;