import React from 'react'
// import PropTypes from 'prop-types';


function FormInputs(props) {
    return (
        <div className='flex flex-col p-2 '>
            <input {...props} className='border-b-2 p-2 outline-none' />
        </div>
    )
}





export default FormInputs