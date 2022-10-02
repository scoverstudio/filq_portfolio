import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import Spinner from "react-bootstrap/Spinner";
import clsx from "clsx";
import fetchVideosFromPlaylist from "../../../functions/fetchVideosFromPlaylist";

const Portfolio = ({
  playlistOneIds,
  playlistTwoIds,
  playlistThreeIds,
  isLoading,
}) => {
  const [videos, setVideos] = useState(null);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    fetchVideosFromPlaylist(
      playlistOneIds,
      playlistTwoIds,
      playlistThreeIds,
      setVideos
    );
  }, [playlistOneIds, playlistThreeIds, playlistTwoIds]);

  const sortByViews = (videos) => {
    const sortByViewsArr = [...videos];
    sortByViewsArr.sort((a, b) => {
      return b.statistics.viewCount - a.statistics.viewCount;
    });
    setVideos(sortByViewsArr);
  };

  const sortByRecent = (videos) => {
    const sortByLikesArr = [...videos];
    sortByLikesArr.sort((a, b) => {
      return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
    });
    setVideos(sortByLikesArr);
  };

  useEffect(() => {
    window.onscroll = function () {
      var myDiv = document.querySelector(".moviesPanel");
      var currWidth = myDiv.clientHeight;
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight + 100
      ) {
        if (currWidth < myDiv.scrollHeight) {
          increaseDiv();
        }
      }
      if (window.innerHeight + window.scrollY >= 1500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
  }, []);

  const increaseDiv = () => {
    var myDiv = document.querySelector(".moviesPanel");
    var currWidth = myDiv.clientHeight;
    myDiv.style.height = currWidth + 800 + "px";
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.portfolioContainer}>
      <h1>Here's my Portfolio!</h1>
      <div className={styles.control}>
        <p>sort by:</p>
        <button onClick={() => sortByRecent(videos)}>Recent</button>
        <button onClick={() => sortByViews(videos)}>Most Views</button>
      </div>
      <div className={clsx("moviesPanel", styles.moviesPanel)}>
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
        <div onClick={() => increaseDiv()} className={styles.revealMore}>
          <i className="fa fa-arrow-down" aria-hidden="true" />
        </div>
      </div>
      <div className={styles.restPortfolio}>
        <h3>For the rest of my work go here!</h3>
        <a href="https://www.youtube.com/playlist?list=PLEmxBs67yX1zyfrwEqikC-ZZ4T0DY672r">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>

      <div
        onClick={() => scrollUp()}
        className={clsx(styles.scrollUp, showScrollUp && styles.display)}
      >
        <i className="fa fa-arrow-up" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Portfolio;
