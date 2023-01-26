import React from 'react'
import { images } from '../assets'
import FeatureCard from '../components/hoc/cards/FeatureCard'
import Hoc from '../components/hoc/Hoc'

function Features() {
  return (
    <Hoc >
        <div className="py-12">
            <h3 className='text-primary text-center text-xl'>Features</h3>
            <h1 className='text-lg md:text-2xl lg:text-4xl font-bold text-primary-dark text-center mt-2'>Designed with everyone in mind</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center gap-y-16 my-4 md:my-6 lg:my-12'>

            <FeatureCard 
            src={images.designTools[0]} 
            alt={images.designTools[1]} 
            title={"Designed with Users in Mind"}
            text={"Get curated content and design inspiration delivered straight to your inbox."}/>

            <FeatureCard 
            src={images.scalability[0]} 
            alt={images.scalability[1]} 
            title={"Scalability"}
            text={"Get curated content and design inspiration delivered straight to your inbox."}/>

            <FeatureCard 
            src={images.security[0]} 
            alt={images.security[1]} 
            title={"Security "}
            text={"Get curated content and design inspiration delivered straight to your inbox."}/>
        </div>



    </Hoc>
  )
}

export default Features