import React from 'react'
import { images } from '../assets'
import Hoc from '../components/hoc/Hoc'

function Trusted() {
  return (
    <Hoc className="bg-primary-cream mt-8 md:mt-0">
        <div className='justify-between items-center hidden lg:flex py-4'>
            <p className='text-sm font-medium my-auto'>Trusted by</p>   

            {images.partners[0].map((value, index) => {
                    return(
                        <img key={index} src={value} alt={images.landingImage[1]}/>
                    )
            })}
        </div>

        <div className='lg:hidden py-4'>
            <p className='text-sm font-medium text-center mb-8'>Trusted by</p>   

            <div className='grid grid-cols-3 gap-4 place-content-center'>
                {images.partners[0].map((value, index) => {
                        return(
                            <img key={index} src={value} alt={images.landingImage[1]} className="mx-auto"/>
                        )
                })}
            </div>
        </div>
    </Hoc>
  )
}

export default Trusted