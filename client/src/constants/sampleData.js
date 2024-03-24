export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "John Boi",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Doe",
    },
    _id: 1,
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Boi",
    },
    _id: 2,
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asadsd",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "L*uda ka Message hai",
    _id: "DSFddsfdsfdfdsfsf",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asadsd 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "L*uda 2 ka Message hai",
    _id: "DSFddsfdsfdfdsfsf",
    sender: {
      _id: "asadsd",
      name: "Chaman 2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];
