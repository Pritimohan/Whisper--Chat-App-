import React from 'react'

function Conversations(props) {
    const { styles, hover } = props
    const isOnline = true
    return (
        <>

            <div className={`h-fit w-full rounded-lg flex items-center px-3 py-2 gap-4 cursor-pointer mb-2 transition-all ease-linear delay-75  ${hover ? 'hover:bg-lightGray' : 'none'} `}>
                <div className={`bg-white ${styles} rounded-full overflow-hidden`}><img className=" w-full h-full object-cover" src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" alt="dp"></img></div>
                <div>
                    <div className='text-white'>jem dow</div>
                    <span className='text-sm text-gray'>{isOnline ? "Online" : "Offline"}</span>
                </div>
            </div>
        </>
    )
}

export default Conversations