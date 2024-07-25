import React from 'react'

function Button(props) {
    const { name, type, form } = props

    return (
        <>
            <button type={type} className='text-white bg-buttoncolor w-36 rounded-full py-2' form={form}>{name}</button>
        </>
    )
}

export default Button