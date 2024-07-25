import React from 'react'
import Conversations from './Conversations'

import { IoMdMore, IoIosSearch } from "react-icons/io";
import HomeInputBox from './HomeInputBox';




function SideBar() {
  return (
    <>
      <div className=" bg-black border w-1/3 h-full rounded-3xl flex items-center justify-center py-4 px-4 flex-col gap-2">
        <div className='w-full h-20 flex items-center justify-center gap-5'>
          <HomeInputBox placeholder="Serarch" button={<IoIosSearch color='#FFFFFF' size={25} />} styles="h-12 w-full" />
          <button className=' hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-xl transition-all ease-linear delay-75'><IoMdMore color='#595c6c' size={28} /></button>
        </div>
        <div className=' w-full h-full overflow-y-scroll no-scrollbar bg-tranparent'>
          <Conversations styles="w-14 h-14" hover={true}/>
          <Conversations styles="w-14 h-14" hover={true}/>
          <Conversations styles="w-14 h-14" hover={true}/>
          <Conversations styles="w-14 h-14" hover={true}/>
        </div>
      </div>
    </>
  )
}

export default SideBar