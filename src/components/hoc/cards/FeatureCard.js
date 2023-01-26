import React from 'react'

function FeatureCard({src, alt, title, text}) {
  return (
    <div className='flex justify-center items-center flex-col w-4/5 mx-auto'>
        <div className='w-full '>
            <img src={src} alt={alt} className="object-contain mx-auto"/>
        </div>
        <h2 className='my-4 text-center font-semibold'>{title}</h2>
        <p className='mb-6 text-center text-black-fade'>{text}</p>
        <a href='#feature_card' className='hover:text-primary hover:underline mx-auto'>Learn more</a>
    </div>
  )
}

export default FeatureCard