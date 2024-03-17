import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar, isAdded } = user;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems="center"
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

// Define propTypes for the component
UserItem.propTypes = {
  isAdded: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired, // Ensure user is an object and is required
  handler: PropTypes.func.isRequired, // Ensure handler is a function and is required
  handlerIsLoading: PropTypes.bool.isRequired, // Ensure handlerIsLoading is a boolean and is required
};

export default memo(UserItem);
