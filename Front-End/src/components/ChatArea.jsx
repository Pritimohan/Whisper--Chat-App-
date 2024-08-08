import React, { useEffect, useState, useRef } from 'react'
import { VscSend } from "react-icons/vsc";
// hooks import
import useSentMessage from '../hooks/useSentMessage';
// components import
import ChatBubble from './ChatBubble';
import MessageInputBox from './HomeInputBox';
import Conversations from './Conversations';
import useGetMessage from '../hooks/useGetMessage';
import { useSelector } from 'react-redux';
import useListenMessages from '../hooks/useListenMessages';





function ChatArea(props) {
    const { selectedUser } = props
    const chatContainerRef = useRef(null)
    const [message, setMessage] = useState("")

    const [sentMessage] = useSentMessage() // hook for sending message
    const [getMessages] = useGetMessage()  // hook for getting message
    useListenMessages()


    const handleMessageSent = (e) => {        // handle message sent
        e.preventDefault()
        const data = new FormData(e.target)
        const message = Object.fromEntries(data)
        sentMessage(message);
        setMessage("")
    }
    // this useEffect use for scroll to bottom of chat container
    useEffect(() => {
        chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            // behavior: "smooth"
        });
    }, [message, getMessages, selectedUser]);

    return (
        <>
            <div className=' bg-black grow h-full rounded-3xl flex items-center justify-between flex-col overflow-hidden px-4 '>
                <div className='w-full h-fit mt-2'>
                    <Conversations styles="w-11 h-11" bg={false} hover={false} conversion={selectedUser} />
                </div>

                <div className='h-full w-full p-2 overflow-y-scroll no-scrollbar ' ref={chatContainerRef}>
                    <ul className='space-y-3 grid grid-cols-1'>
                        {getMessages.map((oneMessage) => (
                            <ChatBubble key={oneMessage._id} senderId={oneMessage.senderid} message={oneMessage.message} />
                        ))}
                    </ul>

                </div>

                <div className='w-full py-3 mx-3'>
                    <MessageInputBox name={"message"} handleform={handleMessageSent} value={message} setValue={setMessage} placeholder={"Type a Message"} type={'text'} button={<VscSend color='#595c6c' size={28} />} styles='w-full h-14' />
                </div>
            </div>
        </>
    )
}

export default ChatArea