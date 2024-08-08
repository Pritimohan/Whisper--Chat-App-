import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setMessages } from "../redux/SelectedConversionSlice";


function useGetMessage() {
  const dispatch = useDispatch();
  const selectedConversion = useSelector((state) => state.selectedConversion.selectedUser);
  const receiverId = useSelector((state) => state.selectedConversion.selectedUser._id);
  const getMessages = useSelector((state) => state.selectedConversion.messaages);
  const sentMessageStatus = useSelector(state => state.sentMessageStatus.sentMessageStatus)
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/message/${receiverId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const messages = await response.json();
        if (!messages) return null;

        dispatch(setMessages(messages));
      } catch (error) {
        toast.error("Failed to fetch messages");
      }
    })();

    // return () => { dispatch(setMessages([])); } // cleanup function to clear messages when component unmount 

  }, [selectedConversion?._id, receiverId, dispatch, sentMessageStatus]);

  return [getMessages];
}

export default useGetMessage;
