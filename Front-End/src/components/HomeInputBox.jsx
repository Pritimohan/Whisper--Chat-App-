import React from 'react'


function HomeInputBox(props) {
  const { placeholder, button, styles, handleform ,name} = props
  return (
    <>
      <div>
        <form onSubmit={handleform} className='flex items-center justify-center gap-4 bg-lightGray rounded-xl px-5'>
          <input type="text" autoComplete='off' placeholder={placeholder} name={name} className={`${styles} outline-none bg-lightGray text-gray`} />
          <button>{button}</button>
        </form>
      </div>
    </>
  )
}

export default HomeInputBox