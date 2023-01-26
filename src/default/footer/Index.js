import React from 'react'

import {navItems} from "./NavItems.js";
import {platforms} from "./platforms";

import "./Navbar.css"
import * as Icons from 'react-icons/fa'
import Hoc from '../../components/hoc/Hoc.js';
import { images } from '../../assets/index.js';

function Footer() {

  const onSubscribeEmail = (e) =>{
    e.preventDefault()
  }
  return (
    <Hoc className="bg-primary-cream">
        <div className='flex justify-between items-start lg:items-center flex-col lg:flex-row py-8 md:py-12 '>

            {/* logo section */}
            <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
                <img src={images.logo[0]} alt={images.logo[1]}/>
                <ul className='md:grid md:grid-cols-1 my-4 md:my-0'>
                        <li className='font-bold mb-4'>Get Started</li>
                        {navItems.map((item) => {
                            return (
                                <li key={item.id} className={` mr-6 lg:0`}>
                                    <a href={item.path} className={`text-black-fade text-sm `}>{item.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>

                <ul className='md:grid md:grid-cols-1 '>
                    <li className='font-bold mb-4'>Platforms</li>
                        {platforms.map((item) => {
                            return (
                                <li key={item.id} className={` mr-6 lg:0`}>
                                    <a href={item.path} className={`text-black-fade text-sm `}>{item.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            {/* Subscribe section */}
            <form onSubmit={onSubscribeEmail} className="mt-8 lg:mt-0">
                <p className='font-bold mb-4'>Newsletter</p>

                <p className={`text-black-fade text-sm mb-4`}>Get curated content and design inspiration delivered straight to your inbox. Learn more</p>

                <div className='flex justify-start items-center mt-2 md:mt-4'>
                    <input 
                        type="email" 
                        id='subscribe_email' 
                        name='subscribe_email' 
                        placeholder='Enter your email'  
                        className='text-primary-black rounded-l text-sm px-2 sm:px-4 py-2 sm:py-4 border outline-none'/>
                    <div className='flex items-center justify-start'>
                    <button type='submit' className='bg-primary px-4 sm:px-8 py-2 sm:py-4 rounded-r text-sm text-white'>Submit</button>
                    </div>
                    
                </div>
            </form>

        </div>

        <div className='flex items-center  my-8 lg:mb-12 lg:mt-8'>
                <Icons.FaInstagram className='text-black-fade hover:text-white mr-4 cursor-pointer text-3xl'/>
                <Icons.FaFacebookF className='text-black-fade hover:text-white mr-4 cursor-pointer text-3xl'/>
                <Icons.FaTwitter className='text-black-fade hover:text-white mr-4 cursor-pointer text-3xl'/>
                
                
            </div>

        <div className='flex justify-between items-start md:items-center sm:flex-row py-6 border-t border-footer-color'>
            <p className='text-white-fade text-xs md:text-sm mb-4 md:mb-0'>Copyright 2018. <span className='text-primary'>Gravii.</span><span className='text-black font-bold'>ng.</span> All rights reserved</p>

            
        </div>
    </Hoc>
  )
}

export default Footer