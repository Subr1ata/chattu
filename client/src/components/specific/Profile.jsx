import { Avatar, Stack, Typography } from "@mui/material";
import {Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon} from "@mui/icons-material"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard
        heading={"Bio"}
        text={"sadas dasdasd ansnsnjdjdjdfjdf djjfkkdf"}
      />
      <ProfileCard
        heading={"Username"}
        text={"@meabhishek"}
        Icon={<UserNameIcon/>}
      />
      <ProfileCard
        heading={"Name"}
        text={"Abhishek Nahar Singh"}
        Icon={<FaceIcon/>}
      />
      <ProfileCard
        heading={"Joined"}
        text={"Abhishek Nahar Singh"}
        Icon={<CalendarIcon/>}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"gray"} variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
