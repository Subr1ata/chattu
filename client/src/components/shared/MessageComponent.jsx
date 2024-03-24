/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { lightBlue } from "../../constants/color";
import moment from "moment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt);

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = "asd";

          return (
            <Box key={index}>
              <a
                href=""
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              ></a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

MessageComponent.propTypes = {
  message: {
    sender: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    attachments: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
  },
  user: PropTypes.object.isRequired,
};

export default memo(MessageComponent);
