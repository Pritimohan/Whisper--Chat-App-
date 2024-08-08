import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSentMessageStatus } from '../redux/setSentMessageStatusSlice'


function useSentMessage() {
  const receiverId = useSelector((state) => state.selectedConversion.selectedUser._id);
  const dispatch = useDispatch()
  const sentMessage = async (message) => {
    try {
      if (!message.message) toast.error("Message can't be empty");

      const response = await fetch(`/api/message/send/${receiverId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      dispatch(setSentMessageStatus(data))

    } catch (error) {
      toast.error(error.message);
    }
  };

  return [sentMessage];
}

export default useSentMessage;
