import React from 'react'

function StateButton(props) {

    if(props.expired){
        return(
            <button className='dash_button_expired px-4 py-2 rounded-full text-center text-sm'>{props.children}</button>
        )
    }

    if(props.neutral){
        return(
            <button className='dash_button_neutral px-4 py-2 rounded-full text-center text-sm'>{props.children}</button>
        )
    }

    if(props.red){
        return(
            <button className='dash_button_red px-4 py-2 rounded-full text-center text-sm'>{props.children}</button>
        )
    }
    return (
        <button className='dash_button_active px-4 py-2 rounded-full text-center text-sm'>{props.children}</button>
    )
}

export default StateButton
