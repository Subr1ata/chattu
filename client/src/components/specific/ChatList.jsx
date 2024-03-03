/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "@mui/material"

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
    {chats?.map((data) => {
        return <div key={chatId}>sd</div>
    })}
  </Stack>
  )
}

export default ChatList