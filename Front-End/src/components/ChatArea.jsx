import React, { useState } from 'react'
import HomeInputBox from './HomeInputBox';
import Conversations from './Conversations';
import { VscSend } from "react-icons/vsc";
import ChatBubble from './ChatBubble';

function ChatArea(props) {
    const {isSelected}= props

    const [message, setMessage] = useState("")

    const chatHandle = (e) => {
        e.preventDefault()
        console.log(e.target.message.value);
        setMessage(e.target.message.value)
    }

    return (
        <>
            <div className=' bg-black grow h-full rounded-3xl flex items-center justify-between flex-col overflow-hidden px-4 '>
                <div className='w-full h-fit mt-2'>
                    <Conversations styles="w-11 h-11" hover={false} />
                </div>

                <div className='h-full w-full p-2 overflow-y-scroll no-scrollbar'>
                    <ul className='space-y-3 grid grid-cols-1'>
                        <ChatBubble person={false} message={"."}/>
                    </ul>

                </div>

                <div className='w-full py-3 mx-3'>
                    <HomeInputBox name="message"  handleform={chatHandle} placeholder="Type a Message" button={<VscSend color='#595c6c' size={28}/>} styles='w-full h-14' />
                </div>
            </div>
        </>
    )
}

export default ChatArea