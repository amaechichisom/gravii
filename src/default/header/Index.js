import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom' import { NavLink } from
// 'react-router-dom'
import {navItems} from "./NavItems.js";


import * as Icons from "react-icons/vsc";
import * as Iconh from "react-icons/hi2";
import "./Navbar.css";

import { images } from '../../assets/index.js';


function Header() {
    const [mobile,
        setMobile] = useState(false);
    const [sidebar,
        setSidebar] = useState(false);

    const [fixed, setFixed] = useState(false)

    const setFixedHandler = () => {
        if(window.scrollY >= 392){
            setFixed(true)
        } else{
            setFixed(false)
        }
    }

    window.addEventListener("scroll", setFixedHandler   )

    useEffect(() => {
        if (window.innerWidth < 800) {
            setMobile(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setMobile(true);
            } else {
                setMobile(false);
                setSidebar(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
        <div className={`flex ${fixed ? "fixed w-full backdrop-blur-md bg-white/90 z-40": "relative"} border-b border-border-color justify-between items-center px-6 md:px-12 lg:px-24 xl:px-32 py-4 lg:py-8`}>
            
            <img src={images.logo[0]} alt={images.logo[1]}/>
                
                {!mobile && (
                <ul className='flex'>
                    {navItems.map((item) => {
                        
                        return (
                            <li key={item.id} className={`${item.nName} border-b border-transparent pb-3 hover:border-primary cursor-pointer hover:text-primary mr-6`}>
                                <a href={item.path} className={`${item.nName} text-base `}>{item.title}</a>
                            </li>
                        );
                    })
                }
                </ul>
            )}

            {mobile && (
            <div className="sidebar-toggle ">
                {!sidebar && (
                <Iconh.HiOutlineBars3
                    className="sidebar-toggle-logo font-light transition text-primary-black"
                    onClick={() => setSidebar(!sidebar)}
                />
                )}
            </div>
            )} 

        {/* sidebar implementation */}

        <div className={`${sidebar ? "sidebar  active" : "sidebar"} bg-primary-cream`} >
            {/* <div className='span__pseudo' onClick={() => setSidebar(!sidebar)}></div> */}
            <div className={`flex bg-primary-cream  ${fixed ? "fixed backdrop-blur-md bg-white/40 z-40 ": "absolute top-0 left-0 bg-transparent"} border-b border-border-color justify-between items-center px-6 md:px-12 lg:px-24 xl:px-32 py-4 lg:py-8`}>
                <img src={images.logo[0]} alt={images.logo[1]}/>
                <Icons.VscChromeClose
                        className="sidebar-toggle-logo z-50 transition text-primary-black"
                        onClick={() => setSidebar(!sidebar)}
                /> 
            </div>
            <ul className="sidebar-items flex__center flex-col w-full">
            {navItems.map((item) => {
                    return (
                        <li key={item.id} className={`${item.sName} w-full`}>
                            <a href={item.path} 
                            className={`text-base mx-auto text-center w-full text-primary-black hover:text-primary`}
                            onClick={() => setSidebar(!sidebar)}>{item.title}</a>
                        </li>
                    );
                })
            }
            </ul>
      </div>
        </div>
        
        
        </>
    )
}

export default Header
