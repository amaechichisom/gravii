import React from 'react';
import {Link} from 'react-router-dom';

import './Button.css';

const Button = props => {
    if (props.href) {
        return (
            <a
                className={`button ${props.textWhite ? "text-white" : "text-primary-black"} 
                ${props.bgPrimary && "bg-primary"}  
                ${props.shadow && "button-shadow" } 
                ${props.className}`}
                href={props.href}>
                {props.children}
            </a>
        );
    }
    if (props.to) {
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={`button ${props.textWhite ? "text-white" : "text-primary-black"} 
                ${props.bgPrimary && "bg-primary"}  
                ${props.shadow && "button-shadow" } 
                ${props.className}`}>
                {props.children}
            </Link>
        );
    }
    return (
        <button
            className={`button ${props.textWhite ? "text-white" : "text-primary-black"} 
            ${props.bgPrimary && "bg-primary"} 
            ${props.shadow && "button-shadow" } 
            ${props.className}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;
