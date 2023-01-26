import React, { useReducer, useEffect } from 'react';

import {validate} from '../../util/validators';

import './input.css'

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

function Inputs(props) {
    
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
      });

      const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  

  const element = props.type
        ? (<input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            readOnly={props.readOnly ? true : false}
            value={inputState.value}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border-4 border-gray-300 placeholder-gray-500 form_login_input text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-black focus:border-primary-black focus:z-10 sm:text-sm ${props.className}`}/>)
        : (<textarea
            id={props.id}
            rows={props.rows || 6}
            onChange={changeHandler}
            placeholder={props.placeholder}
            onBlur={touchHandler}
            value={inputState.value}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border-4 border-gray-300 placeholder-gray-500 form_login_input text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-black focus:border-primary-black focus:z-10 sm:text-sm ${props.className}`}/>);

    return (
        <div className={`flex flex-col mb-4  ${props.classNameDiv}`}>
            <label className={`text-sm mb-2 ${props.labelClassName}`} htmlFor={props.id}>{props.label}</label>
                <div className={`${props.containerClassName}`}>
                {element}
                </div>
              
            {!inputState.isValid && inputState.isTouched && (
                <div className='flex items-center mt-2 text-xs'>
                    <div className='w-3 h-3 p-2 bg-primary-pink flex__center rounded-full text-error-red'>!</div>
                    <p className='text-error-red ml-1'>{props.errorText}</p>
                </div>
            )}
        </div>
    )
}

export default Inputs
