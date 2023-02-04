import {useEffect, useState} from "react";
import styles from "./Portfolio.module.scss";
import Spinner from "react-bootstrap/Spinner";
import clsx from "clsx";
import fetchVideosFromPlaylist from "../../../functions/fetchVideosFromPlaylist";
import fetchVideosFromPortfolio from "../../../functions/fetchVideosFromPortfolio";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = ({
                       playlistOneIds,
                       playlistTwoIds,
                       playlistThreeIds,
                       playlistPortfolioIds,
                       isLoading,
                   }) => {
    const [videos, setVideos] = useState(null);
    const [title, setTitle] = useState("all videos");
    const [sortBy, setSortBy] = useState("sorted by recent");
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    const [showVideoEditing, setShowVideoEditing] = useState(false)
    const [showPhotos, setShowPhotos] = useState(false)
    const [showVideoGraphic, setShowVideoGraphic] = useState(false)

    useEffect(() => {
        fetchVideosFromPlaylist(
            playlistOneIds,
            playlistTwoIds,
            playlistThreeIds,
            setVideos
        );
    }, [playlistOneIds, playlistPortfolioIds, playlistThreeIds, playlistTwoIds]);

    const sortByViews = (videos) => {
        const sortByViewsArr = [...videos];
        sortByViewsArr.sort((a, b) => {
            return b.statistics.viewCount - a.statistics.viewCount;
        });
        setVideos(sortByViewsArr);
        setSortBy("sorted by most viewed");
    };

    const sortByRecent = (videos) => {
        const sortByLikesArr = [...videos];
        sortByLikesArr.sort((a, b) => {
            return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
        });
        setVideos(sortByLikesArr);
        setSortBy("sorted by recent");
    };

    const showAllVideos = () => {
        fetchVideosFromPlaylist(
            playlistOneIds,
            playlistTwoIds,
            playlistThreeIds,
            setVideos
        );
        setTitle("all videos");
    };

    const showPortfolio = async () => {
        fetchVideosFromPortfolio(playlistPortfolioIds, setVideos);
        setTitle("porftolio");
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
                    setAllLoaded(false);
                } else if (
                    myDiv.scrollHeight > 1500 &&
                    currWidth === myDiv.scrollHeight
                ) {
                    setAllLoaded(true);
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
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const backToPanels = () => {
        setShowVideoGraphic(false);
        setShowVideoEditing(false);
        setShowPhotos(false);
    }

    return (
        <>
            <div
                className={clsx(styles.portfolioContainer, (showVideoEditing || showPhotos || showVideoGraphic) && styles.active)}>
                {
                    !showVideoEditing && !showPhotos && !showVideoGraphic && (
                        <div className={styles.panels}>
                            <div onClick={() => setShowPhotos(true)}>photos</div>
                            <div onClick={() => setShowVideoEditing(true)}>video editing</div>
                            {/*<div onClick={() => setShowVideoGraphic(true)}>video graphic</div>*/}
                        </div>
                    )
                }
                {
                    showPhotos && (
                        <div className={styles.photosContainer}>
                            <div className={styles.titleContainer}>
                                <h1>Photos</h1>
                                <span onClick={() => backToPanels()}>{"<--"}</span>
                            </div>
                        </div>
                    )
                }
                {
                    showVideoGraphic && (
                        <div className={styles.videoGraphicContainer}>
                            <div className={styles.titleContainer}>
                                <h1>Video Graphic</h1>
                                <span onClick={() => backToPanels()}>{"<--"}</span>
                            </div>
                        </div>
                    )
                }
                {
                    showVideoEditing && (
                        <div className={styles.videoContainer}>
                            {/*<div*/}
                            {/*    onClick={() => scrollUp()}*/}
                            {/*    className={clsx(styles.scrollUp, showScrollUp && styles.display)}*/}
                            {/*>*/}
                            {/*    <i className="fa fa-arrow-up" aria-hidden="true"/>*/}
                            {/*</div>*/}
                            <div className={styles.titleContainer}>
                                <h1>{title}</h1>
                                <h2>{sortBy}</h2>
                                <span onClick={() => backToPanels()}>{"<--"}</span>
                            </div>
                            <div className={styles.control}>
                                <p>filter by:</p>
                                <ToggleButtonGroup
                                    className={styles.filterGroup}
                                    type="radio"
                                    name="filters"
                                    defaultValue={1}
                                >
                                    <ToggleButton
                                        className={styles.button}
                                        id="option1"
                                        value={1}
                                        variant="danger"
                                        onClick={() => showAllVideos()}
                                    >
                                        All videos
                                    </ToggleButton>
                                    <ToggleButton
                                        className={styles.button}
                                        id="option2"
                                        value={2}
                                        variant="danger"
                                        onClick={() => showPortfolio()}
                                    >
                                        Portfolio
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                <p>sort by:</p>
                                <ToggleButtonGroup
                                    className={styles.filterGroup}
                                    type="radio"
                                    name="sorts"
                                    defaultValue={1}
                                >
                                    <ToggleButton
                                        className={styles.button}
                                        value={1}
                                        id="sort1"
                                        variant="danger"
                                        onClick={() => {
                                            sortByRecent(videos);
                                        }}
                                    >
                                        Recent
                                    </ToggleButton>
                                    <ToggleButton
                                        className={styles.button}
                                        value={2}
                                        id="sort2"
                                        variant="danger"
                                        onClick={() => {
                                            sortByViews(videos);
                                        }}
                                    >
                                        Most Views
                                    </ToggleButton>
                                </ToggleButtonGroup>
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
                    <i className="fa fa-thumbs-up" aria-hidden="true"/>
                                                    {movie.statistics.likeCount}
                  </span>
                                            </div>
                                        </div>
                                    ))
                                )}
                                <div
                                    onClick={() => increaseDiv()}
                                    className={clsx(styles.revealMore, allLoaded && styles.display)}
                                >
                                    <i className="fa fa-arrow-down" aria-hidden="true"/>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
};

export default Portfolio;
