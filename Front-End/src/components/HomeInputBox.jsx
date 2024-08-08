import { set } from 'mongoose';
import React, { useState } from 'react'

function HomeInputBox(props) {

    const { placeholder, button, styles, handleform, value, setValue ,name,type } = props;
  
    return (
        <>
            <div>
                <form onSubmit={handleform} className='flex items-center justify-center gap-4 bg-lightGray rounded-xl px-5'>
                    <input type={type} autoComplete='off' placeholder={placeholder} name={name} value={value} onChange={((e)=>{setValue(e.target.value)})} className={`${styles}  outline-none bg-lightGray text-white`} />
                    <button type='submit'>{button}</button>
                </form>
            </div>
        </>
    )
}

export default HomeInputBox