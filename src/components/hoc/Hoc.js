import React from 'react'

function Hoc(props) {
  return (
    <div className={`px-6 md:px-12 lg:px-24 xl:px-32 py-4 lg:py-6 lg:pt-4 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Hoc