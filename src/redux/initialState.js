const initialState = {
  clients: [
    {
      name: "ESL",
      image: `${process.env.PUBLIC_URL}/images/eslwhite.png`,
      description:
        "German esports organizer and production company that produces video game competitions worldwide, based in Cologne.",
      channelName: "ESL Counter-Strike",
    },
    {
      name: "HLTV",
      image: `${process.env.PUBLIC_URL}/images/HLTV.png`,
      description:
        "News website and forum which covers professional Counter-Strike: Global Offensive esports news, tournaments and statistics.",
      channelName: "HLTVorg",
    },
    {
      name: "Valorant Polska",
      image: `${process.env.PUBLIC_URL}/images/VALORANT.png`,
      description: "Official Polish channel of VALORANT video game.",

      channelName: "VALORANT  Polska",
    },
    {
      name: "ESEA",
      image: `${process.env.PUBLIC_URL}/images/esea1.png`,
      description:
        "Esports competitive video gaming online league & community founded by E-Sports Entertainment Association.",

      channelName: "ESEA",
    },
    {
      name: "Cloud9",
      image: `${process.env.PUBLIC_URL}/images/c9.png`,
      description:
        "American professional esports company based in Santa Monica, California.",

      channelName: "Cloud9 CSGO",
      style: {
        transform: "scale(135%)",
      },
    },
    {
      name: "HONORIS",
      image: `${process.env.PUBLIC_URL}/images/HONORIS.png`,
      description:
        "Polish professional esports organization established by Wiktor 'TaZ' Wojtas and Filip 'NEO' Kubski.",

      channelName: "HONORIS",
    },
    {
      name: "NadeKing",
      image: `${process.env.PUBLIC_URL}/images/nadeking.png`,
      description:
        "CS:GO YouTuber from New Zealand with over 1.25 millions subscriptions.",

      channelName: "NadeKing",
    },
    {
      name: "Galaxy Racer",
      image: `${process.env.PUBLIC_URL}/images/gxr.png`,

      description: "Esports organization from the United Arab Emirates. ",

      channelName: "Galaxy Racer",
      style: {
        transform: "scale(135%)",
      },
    },
    {
      name: "Fabryka Esportu",
      image: `${process.env.PUBLIC_URL}/images/fabryka_logo.png`,
      description: "Polish Esports Management Agency.",

      channelName: "FABRYKA ESPORTU",
    },
    {
      name: "EsportalPolska",
      image: `${process.env.PUBLIC_URL}/images/esportal.png`,
      description:
        "Official Polish channel of Swedish tournament organizer and competitive gaming platform founded in 2013. ",

      channelName: "EsportalPolska",
    },
  ],
  clients_pl: [
    {
      name: "ESL",
      image: `${process.env.PUBLIC_URL}/images/eslwhite.png`,
      description:
        "Organizator turniejów esportowych i firma zajmująca się produkcją filmów z gier komputerowych, z siedzibą w Kolonii.",
      channelName: "ESL Counter-Strike",
    },
    {
      name: "HLTV",
      image: `${process.env.PUBLIC_URL}/images/HLTV.png`,
      description:
        "Strona i forum internetowe, na której można znaleźć najnowsze wiadomości, informacje o turniejach i statystyki graczy ze świata CS:GO.",
      channelName: "HLTVorg",
    },
    {
      name: "Valorant Polska",
      image: `${process.env.PUBLIC_URL}/images/VALORANT.png`,
      description: "Oficjalny Polski kanał gry VALORANT.",

      channelName: "VALORANT  Polska",
    },
    {
      name: "ESEA",
      image: `${process.env.PUBLIC_URL}/images/esea1.png`,
      description:
        "Esportowa Liga w CS:GO",

      channelName: "ESEA",
    },
    {
      name: "Cloud9",
      image: `${process.env.PUBLIC_URL}/images/c9.png`,
      description:
        "Amerykańska organizacja esportowa z siedzibą w Santa Monica, w Kalifornii.",

      channelName: "Cloud9 CSGO",
      style: {
        transform: "scale(135%)",
      },
    },
    {
      name: "HONORIS",
      image: `${process.env.PUBLIC_URL}/images/HONORIS.png`,
      description:
        "Polska organizacja esportowa stworzona przez Wiktora 'TaZa' Wojtasa i Filipa 'NEO' Kubskiego.",

      channelName: "HONORIS",
    },
    {
      name: "NadeKing",
      image: `${process.env.PUBLIC_URL}/images/nadeking.png`,
      description:
        "Youtuber z Nowej Zelandii z ponad 1.25 miliona subskrybcji.",

      channelName: "NadeKing",
    },
    {
      name: "Galaxy Racer",
      image: `${process.env.PUBLIC_URL}/images/gxr.png`,

      description: "Organizacja esportowa ze Zjednoczonych Emirat Arabskich.",

      channelName: "Galaxy Racer",
      style: {
        transform: "scale(135%)",
      },
    },
    {
      name: "Fabryka Esportu",
      image: `${process.env.PUBLIC_URL}/images/fabryka_logo.png`,
      description: "Polska esportowa organizacja menedżerska.",

      channelName: "FABRYKA ESPORTU",
    },
    {
      name: "EsportalPolska",
      image: `${process.env.PUBLIC_URL}/images/esportal.png`,
      description:
        "Oficjalny Polski kanał Szwedzkiej platformy gamingowej.",

      channelName: "EsportalPolska",
    },
  ],
};

export default initialState;
