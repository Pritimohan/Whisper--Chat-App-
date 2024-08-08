import { useState, useEffect, useRef } from 'react'
// icons import
import { IoIosSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
// hooks import
import useLogout from '../hooks/useLogout';
import useConversion from '../hooks/useConversion';
// components import
import HomeInputBox from './HomeInputBox';
import Conversations from './Conversations'
import useSearchUsers from '../hooks/useSearchUsers';






function SideBar() {
  const [conversions] = useConversion()
  const [logout] = useLogout() // logout hook,and the logout function passed to the logot button.
  const [value, setValue] = useState('') // value state for the input box
  // console.log(value);
  const [searchResult] = useSearchUsers(value)

const handleSearchSubmit = (e) => {
  e.preventDefault()
}

  return (
    <>
      <div className=" bg-black border w-1/3 h-full rounded-3xl flex items-center justify-center py-4 px-4 flex-col gap-2 relative">
        <div className='w-full h-20 flex items-center justify-center gap-5 '>
          <HomeInputBox type={"search"} placeholder="Serarch" button={<IoIosSearch color='#FFFFFF' size={25} />} styles="h-12 w-full" value={value} setValue={setValue} handleform={handleSearchSubmit} />
          <button onClick={() => { logout() }} className='hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-xl transition-all ease-linear delay-75'><IoLogOutOutline color='#595c6c' size={25} /></button>
        </div>
        <div className=' w-full h-full overflow-y-scroll no-scrollbar bg-tranparent'>
          {searchResult.length == 0 ? conversions.map((conversion) => (
            <Conversations key={conversion._id} bg={true} conversion={conversion} styles="w-14 h-14" hover={true} />
          )) : searchResult.map((user) => (
            <Conversations key={user._id} bg={true} conversion={user} styles="w-14 h-14" hover={true} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SideBar