import React from 'react'
import {Link} from 'react-router-dom'

import "./Button.css"

const Links = (props) => {
    return (
        <Link
            to={props.to}
            exact={props.exact}
            className={`button ${props.long ==='long'  && 'button__long'} ${props.white === 'white' && 
            'bg-white text-black'} ${props.nopadding === 'nopadding' &&
             'px-0 py-0'} ${props.colored === 'colored' && 'bg-black text-white'}`}>
                {props.children}
        </Link>
    )
}

export default Links
