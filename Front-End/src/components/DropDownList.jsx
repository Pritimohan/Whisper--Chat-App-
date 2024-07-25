import React from 'react'

function DropDownList() {
  return (
    <>
    <select name='gender' className='block p-2 w-52 m-2 border-b-2 focus:outline-none focus:ring-0 peer'>
        {/* <option className='text-gray '>Gender</option> */}
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    </>
  )
}

export default DropDownList