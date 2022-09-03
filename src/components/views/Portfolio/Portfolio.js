import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import Spinner from "react-bootstrap/Spinner";
import clsx from "clsx";
import axios from "axios";

const Portfolio = ({
  playlistOneIds,
  playlistTwoIds,
  playlistThreeIds,
  isLoading,
}) => {
  const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";
  const [videos, setVideos] = useState(null);
  const [fade, setFade] = useState(null);

  useEffect(() => {
    const getVideosFromPlaylist = async () => {
      const getPlaylistOne = axios.get(
        `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${playlistOneIds.toString()}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`
      );
      const getPlaylistTwo = axios.get(
        `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${playlistTwoIds.toString()}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`
      );
      const getPlaylistThree = axios.get(
        `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${playlistThreeIds.toString()}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`
      );
      axios.all([getPlaylistOne, getPlaylistTwo, getPlaylistThree]).then(
        axios.spread((...allData) => {
          const playlistOne = allData[0].data.items;
          const playlistTwo = allData[1].data.items;
          const playlistThree = allData[2].data.items;
          setVideos([...playlistOne, ...playlistTwo, ...playlistThree]);
        })
      );
    };

    (async () => await getVideosFromPlaylist())();
  }, [playlistOneIds, playlistThreeIds, playlistTwoIds]);

  const sortByViews = (videos) => {
    const sortByViewsArr = [...videos];
    sortByViewsArr.sort((a, b) => {
      return b.statistics.viewCount - a.statistics.viewCount;
    });
    setVideos(sortByViewsArr);
    setFade(true);
  };

  const sortByRecent = (videos) => {
    const sortByLikesArr = [...videos];
    sortByLikesArr.sort((a, b) => {
      return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
    });
    setVideos(sortByLikesArr);
    setFade(true);
  };

  return (
    <div className={styles.portfolioContainer}>
      <h1>Here's my Portfolio!</h1>
      <div className={styles.control}>
        <p>sort by:</p>
        <button onClick={() => sortByRecent(videos)}>Recent</button>
        <button onClick={() => sortByViews(videos)}>Most Views</button>
      </div>
      <div className={clsx(styles.moviesPanel, fade && styles.fadeIn)}>
        {isLoading ? (
          <Spinner className="m-auto" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          videos &&
          videos.map((movie) => (
            <div key={movie.id} className={styles.movieBox}>
              <div className={styles.movieImage}>
                <a href={`https://www.youtube.com/watch?v=${movie.id}`}>
                  <img
                    alt="movie"
                    src={`${movie.snippet.thumbnails.medium.url}`}
                  />
                </a>
              </div>
              <div className={styles.movieContent}>
                <a href={`https://www.youtube.com/watch?v=${movie.id}`}>
                  <h3>{movie.snippet.title}</h3>
                </a>
                <span>Views: {movie.statistics.viewCount}</span>
                <span>
                  <i className="fa fa-thumbs-up" aria-hidden="true" />
                  {movie.statistics.likeCount}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.restPortfolio}>
        <h3>For the rest of my work go here!</h3>
        <a href="https://www.youtube.com/playlist?list=PLEmxBs67yX1zyfrwEqikC-ZZ4T0DY672r">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
