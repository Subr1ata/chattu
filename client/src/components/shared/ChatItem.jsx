/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <Link to={`/chat/${_id}`}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        {/* Avatar Card */}
        <Stack>
            <Typography>{name}</Typography>
            {
                newMessageAlert && (
                    <Typography>{newMessageAlert.count}</Typography>
                )
            }
        </Stack>
      </div>
    </Link>
  );
};

export default ChatItem;
