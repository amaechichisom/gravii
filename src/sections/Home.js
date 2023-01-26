import React from 'react'
import { images } from '../assets'

function Home() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 place-content-center my-auto min-h-screen-90 h-fit overflow-y-hidden xl:pr-24'>
        <img src={images.landingImage[0]} alt={images.landingImage[1]} className="lg:absolute lg:left-0 lg:top-0 -z-10"/>

        <div className='my-auto lg:col-start-3 xl:col-start-2 place-content-center flex justify-center items-center lg:items-start flex-col m-4 lg:m-0'>
            <img src={images.phoneIcon[0]} alt={images.phoneIcon[1]} className="mt-4 lg:mt-0"/>
            <h1 className=' text-xl md:text-2xl lg:text__45 xl:text-5xl font-bold my-3 text-center lg:text-left'>
                Guaranteed to give you the best experience in <span className='text-primary'>banking</span>
            </h1>

            <p className='mb-6 text-center lg:text-left'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>

            <a href="#signup" className=' text-primary border-b border-primary'>Get Started</a>
        </div>
    </div>
  )
}

export default Home