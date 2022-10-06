import axios from "axios";

const fetchVideosFromPortfolio = (playlistPortfolioIds, setVideos) => {
  const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";

  const getPortfolioPlaylist = axios.get(
    `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${playlistPortfolioIds.toString()}&key=${
      process.env.REACT_APP_YOUTUBE_API_KEY
    }`
  );

  axios.all([getPortfolioPlaylist]).then(
    axios.spread((...allData) => {
      const portfolio = allData[0].data.items;

      setVideos(
        [...portfolio].sort((a, b) => {
          return (
            new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
          );
        })
      );
    })
  );
};

export default fetchVideosFromPortfolio;
