import React, { useEffect, useState } from 'react'

import './input.css'

import NumberFormat from 'react-number-format';




function Number(props) {

    const [value, setValue] = useState(null)
    const [actualValue, setActualValue] = useState(null)

    const {onInput} = props

    useEffect(() => {
        
        onInput(actualValue)

    }, [onInput, actualValue])

    return (
        <div className={`flex flex-col ${props.classNameDiv}`}>
            {props.label && <label className='text-sm mb-2' htmlFor={props.id}>{props.label}</label>}
            <NumberFormat
                className={props.className}
                value={props.value? props.value: value}
                id={props.id}
                thousandSeparator={true}
                prefix={'₦'}
                decimalScale={2}
                defaultValue={0}
                displayType={props.text ? "text" : "input"}
                fixedDecimalScale={true}
                onValueChange={(values) => {
                    const { formattedValue, value } = values;
                    setValue(formattedValue);

                    setActualValue(value)

                  }}
                />
        </div>
    )
}

export default Number