import React from 'react'

// css scripts
import "./LoadingSpinner.css"

// custom util functions
import { images } from '../../assets'



function Loader() {
    return (
        <div role="status" className='mx-auto my-4 col-span-3 flex justify-center items-center'>
            <img src={images.loading[0]} alt={images.loading[1]} className="loading_spin"/>
        </div>
    )
}

export default Loader
