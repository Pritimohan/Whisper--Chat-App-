import React from 'react'

function DropDownList() {
  return (
    <>
    <select name='gender'aria-placeholder='Gender' className='border-b-2 p-2 my-2 outline-none w-'>
        <option className='text-gray '>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    </>
  )
}

export default DropDownList