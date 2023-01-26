import React, {useReducer, useEffect, useState} from 'react';

import {validate} from '../../util/validators';

import './input.css'
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            {
                return {
                    ...state,
                    isTouched: true
                }
            }
        default:
            return state;
    }
};

function Input(props) {

    const [passwordValue,
        setPasswordValue] = useState(false)

    const [inputState,
        dispatch] = useReducer(inputReducer, {  
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({type: 'CHANGE', val: event.target.value, validators: props.validators});
    };

    const touchHandler = () => {
        dispatch({type: 'TOUCH'});
    };


    return (
        <div className={`flex flex-col w-full ${props.divClassName}`}>
            <label className={`text-sm ${props.labelClassName}`} htmlFor={id}>{props.label}<span className='text-red-600'>{props.required && "*"}</span></label>
            
            {props.type === 'password'
                ? (
                    <div
                        className={`${props.containerClassName}`}>
                        
                        <input
                            type={!passwordValue
                            ? props.type
                            : "text"}
                            id={id}
                            placeholder={props.placeholder}
                            onChange={changeHandler}
                            onBlur={touchHandler}
                            autoComplete="current-password"
                            value={inputState.value}
                            className={` ${props.className}`}/> 
                            
                            {passwordValue
                            ? <HiOutlineEye
                                    className="text-primary-black text-lg absolute top-1/3 right-2 cursor-pointer z-10"
                                    onClick={(e) => setPasswordValue(!passwordValue)}/>
                            : <HiOutlineEyeSlash
                                className="text-primary-black text-lg absolute top-1/3 right-2 cursor-pointer z-10"
                                onClick={(e) => setPasswordValue(!passwordValue)}/>}
                    </div>
                )
                : (<input
                    type={props.type}
                    id={id}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    autoComplete={props.type}
                    value={inputState.value}
                    readOnly={props.readOnly}
                    className={`${props.className}`}/>)}
                    
            { (
                <div className={`flex items-center mt-1 ${!inputState.isValid && inputState.isTouched ? "visible": "invisible"} text-xs`}>
                    <div className='w-3 h-3 p-2 bg-primary-gray flex__center rounded-full text-white'>
                        !
                    </div>
                    <p className='text-primary-gray ml-1'>{props.errorText}</p>
                </div>
            )}
        </div>
    )
}

export default Input
