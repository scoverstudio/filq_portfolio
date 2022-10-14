import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import fetchVideosFromPlaylist from "../../../functions/fetchVideosFromPlaylist";
import styles from "./FilteredPortfolio.module.scss";
const FilteredPortfolio = ({
  playlistOneIds,
  playlistTwoIds,
  playlistThreeIds,
  isLoading,
}) => {
  const { id } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchVideosFromPlaylist(
      playlistOneIds,
      playlistTwoIds,
      playlistThreeIds,
      setVideos
    );
  }, [playlistOneIds, playlistThreeIds, playlistTwoIds]);

  return (
    <div className={styles.videosContainer}>
      <h2>
        <a href="/about">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        {id}
      </h2>

      {videos &&
      videos.find(
        (video) => video.snippet.channelTitle.replaceAll("/", "") === id
      ) ? (
        videos.map((video) =>
          video.snippet.channelTitle.replaceAll("/", "") === id ? (
            <div key={video.id} className={styles.videoBox}>
              <div className={styles.videoImage}>
                <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                  <img
                    alt="video"
                    src={`${video.snippet.thumbnails.medium.url}`}
                  />
                </a>
              </div>
              <div className={styles.videoContent}>
                <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                  <h3>{video.snippet.title}</h3>
                </a>
                <span>Views: {video.statistics.viewCount}</span>
                <span>
                  <i className="fa fa-thumbs-up" aria-hidden="true" />
                  {video.statistics.likeCount}
                </span>
              </div>
            </div>
          ) : null
        )
      ) : isLoading ? (
        <div>Loading!</div>
      ) : (
        <div className={styles.empty}>
          <h2>Nothing's here!</h2>
        </div>
      )}
    </div>
  );
};

export default FilteredPortfolio;
