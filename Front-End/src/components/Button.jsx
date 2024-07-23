import React from 'react'

function Button(props) {
    return (
        <>
            <button {...props} className='text-white bg-buttoncolor w-36 rounded-full py-2'>{props.name}</button>
        </>
    )
}

export default Button