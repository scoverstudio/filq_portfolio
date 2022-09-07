const initialState = {
  clients: [
    {
      name: "ESL",
      image: `${process.env.PUBLIC_URL}/images/eslwhite.png`,
      description:
        "The world's largest esports organization. They are hosting esports tournaments all over the globe.",
      channelName: "ESL Counter-Strike",
    },
    {
      name: "HLTV",
      image: `${process.env.PUBLIC_URL}/images/HLTV.png`,
      description:
        "The home of competitive Counter-Strike. HLTV, formerly an acronym of Half-Life Television, is a news website and forum which covers professional Counter-Strike: Global Offensive esports news, tournaments and statistics.",
      channelName: "HLTVorg",
    },
    {
      name: "NadeKing",
      image: `${process.env.PUBLIC_URL}/images/nadeking.png`,
      description: "Supergeneral guy with 1M+ subs.",
      style: {
        paddingBottom: "30px",
      },
      channelName: "NadeKing",
    },
    {
      name: "Cloud9 CSGO",
      image: `${process.env.PUBLIC_URL}/images/Cloud-9.png`,
      description: "Cloud9 CSGO!",
      style: {
        paddingBottom: "15px",
      },
      channelName: "Cloud9 CSGO",
    },
    {
      name: "DreamHack",
      image: `${process.env.PUBLIC_URL}/images/DreamHack.png`,
      description: "Supergeneral guy with 1M+ subs.",
      style: {
        paddingBottom: "30px",
      },
      channelName: "HLTVorg",
    },
    {
      name: "Valorant Polska",
      image: `${process.env.PUBLIC_URL}/images/Valorant_logo.png`,
      description: "The biggest polish Valorant community!",
      style: {
        paddingBottom: "30px",
      },
      channelName: "VALORANT",
    },
    {
      name: "Dust2.dk",
      image: `${process.env.PUBLIC_URL}/images/Dust2dk_Logo.png`,
      description:
        "Danish Counter-Strike coverage site with coverage of the Danish scene.",
      style: {
        paddingBottom: "30px",
      },
      channelName: "Dust2.dk",
    },
    {
      name: "EsportalPolska",
      image: `${process.env.PUBLIC_URL}/images/esportal.png`,
      description: "Polish portal",

      channelName: "EsportalPolska",
    },
    {
      name: "Fabryka Esportu",
      image: `${process.env.PUBLIC_URL}/images/fabryka_logo.png`,
      description:
        "The mission of Fabryka Esportu is to introduce a new quality of service for professional esport  players. ",

      channelName: "FABRYKA ESPORTU",
    },
    {
      name: "Galaxy Racer",
      image: `${process.env.PUBLIC_URL}/images/Galaxy_Racer_GXR.png`,
      style: {
        paddingBottom: "50px",
      },
      description:
        "Galaxy Racer (GXR) is the largest esports, gaming and lifestyle organization in the world, with market presence in Middle East North Africa (MENA), North America, Southeast Asia (SEA), South Asia and Europe.",

      channelName: "Galaxy Racer",
    },
  ],
};

export default initialState;
