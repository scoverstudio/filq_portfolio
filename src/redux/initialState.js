const initialState = {
  clients: [
    {
      name: "ESL",
      image: `${process.env.PUBLIC_URL}/images/eslwhite.png`,
      description:
        "The world's largest esports organization. They are hosting esports tournaments all over the globe.",
      videos: [
        "https://www.youtube.com/watch?v=hVp8HBxHhMQ",
        "https://www.youtube.com/watch?v=YxClsDYQYRA",
      ],
    },
    {
      name: "HLTV",
      image: `${process.env.PUBLIC_URL}/images/HLTV.png`,
      description:
        "The home of competitive Counter-Strike. HLTV, formerly an acronym of Half-Life Television, is a news website and forum which covers professional Counter-Strike: Global Offensive esports news, tournaments and statistics.",
      videos: [
        "https://www.youtube.com/watch?v=hVp8HBxHhMQ",
        "https://www.youtube.com/watch?v=YxClsDYQYRA",
      ],
    },
    {
      name: "NadeKing",
      image: `${process.env.PUBLIC_URL}/images/nadeking.png`,
      description: "Supergeneral guy with 1M+ subs.",
      style: {
        "padding-bottom": "30px",
      },
      videos: [
        "https://www.youtube.com/watch?v=hVp8HBxHhMQ",
        "https://www.youtube.com/watch?v=YxClsDYQYRA",
      ],
    },
    {
      name: "DreamHack",
      image: `${process.env.PUBLIC_URL}/images/DreamHack.png`,
      description: "Supergeneral guy with 1M+ subs.",
      style: {
        "padding-bottom": "30px",
      },
      videos: [
        "https://www.youtube.com/watch?v=hVp8HBxHhMQ",
        "https://www.youtube.com/watch?v=YxClsDYQYRA",
      ],
    },
  ],
};

export default initialState;
