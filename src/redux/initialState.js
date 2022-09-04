const initialState = {
  clients: [
    {
      name: "ESL",
      image: `${process.env.PUBLIC_URL}/images/eslwhite.png`,
      description:
        "The world's largest esports organization. They are hosting esports tournaments all over the globe.",
      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "HLTV",
      image: `${process.env.PUBLIC_URL}/images/HLTV.png`,
      description:
        "The home of competitive Counter-Strike. HLTV, formerly an acronym of Half-Life Television, is a news website and forum which covers professional Counter-Strike: Global Offensive esports news, tournaments and statistics.",
      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "NadeKing",
      image: `${process.env.PUBLIC_URL}/images/nadeking.png`,
      description: "Supergeneral guy with 1M+ subs.",
      style: {
        "padding-bottom": "30px",
      },
      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "DreamHack",
      image: `${process.env.PUBLIC_URL}/images/DreamHack.png`,
      description: "Supergeneral guy with 1M+ subs.",
      style: {
        "padding-bottom": "30px",
      },
      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "Valorant Polska",
      image: `${process.env.PUBLIC_URL}/images/Valorant_logo.png`,
      description: "The biggest polish Valorant community!",
      style: {
        "padding-bottom": "30px",
      },
      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "Dust2.dk",
      image: `${process.env.PUBLIC_URL}/images/Dust2dk_Logo.png`,
      description:
        "Danish Counter-Strike coverage site with coverage of the Danish scene.",
      style: {
        "padding-bottom": "30px",
      },
      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "EsportalPolska",
      image: `${process.env.PUBLIC_URL}/images/esportal.png`,
      description: "Polish portal",

      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "Fabryka Esportu",
      image: `${process.env.PUBLIC_URL}/images/fabryka_logo.png`,
      description:
        "The mission of Fabryka Esportu is to introduce a new quality of service for professional esport  players. ",

      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
    {
      name: "Galaxy Racer",
      image: `${process.env.PUBLIC_URL}/images/Galaxy_Racer_GXR.png`,
      style: {
        "padding-bottom": "50px",
      },
      description:
        "Galaxy Racer (GXR) is the largest esports, gaming and lifestyle organization in the world, with market presence in Middle East North Africa (MENA), North America, Southeast Asia (SEA), South Asia and Europe.",

      videos: ["https://www.youtube.com/watch?v=hVp8HBxHhMQ"],
    },
  ],
};

export default initialState;
