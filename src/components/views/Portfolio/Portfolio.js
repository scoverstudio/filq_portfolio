import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import Spinner from "react-bootstrap/Spinner";
import clsx from "clsx";

const Portfolio = (props) => {
  const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";
  const [videos, setVideos] = useState(null);
  const [fade, setFade] = useState(null);

  useEffect(() => {
    const getVideosFromPlaylist = async () => {
      const res = await fetch(
        `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${props.ids.toString()}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`
      );
      const data = await res.json();
      setVideos(data.items);
    };
    (async () => await getVideosFromPlaylist())();
  }, [props.ids]);

  const sortByViews = (videos) => {
    const sortByViewsArr = [...videos];
    sortByViewsArr.sort((a, b) => {
      return b.statistics.viewCount - a.statistics.viewCount;
    });
    setVideos(sortByViewsArr);
    setFade(true);
  };

  const sortByLikes = (videos) => {
    const sortByLikesArr = [...videos];
    sortByLikesArr.sort((a, b) => {
      return b.statistics.likeCount - a.statistics.likeCount;
    });
    setVideos(sortByLikesArr);
    setFade(true);
  };

  return (
    <div className={styles.portfolioContainer}>
      <h1>Here's my Portfolio!</h1>
      <div className={styles.control}>
        <p>sort by:</p>
        <button onClick={() => sortByViews(videos)}>Most popular</button>
        <button onClick={() => sortByLikes(videos)}>Most Liked</button>
      </div>
      <div className={clsx(styles.moviesPanel, fade && styles.fadeIn)}>
        {props.isLoading ? (
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
          <i class="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
