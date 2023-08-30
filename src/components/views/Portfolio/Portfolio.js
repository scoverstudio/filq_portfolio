import {useEffect, useState} from "react";
import styles from "./Portfolio.module.scss";
import Spinner from "react-bootstrap/Spinner";
import clsx from "clsx";
import fetchVideosFromPlaylist from "../../../functions/fetchVideosFromPlaylist";
import fetchVideosFromPortfolio from "../../../functions/fetchVideosFromPortfolio";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import "./Portfolio.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import { useTranslation } from "react-i18next";

const Portfolio = ({
                       playlistOneIds,
                       playlistTwoIds,
                       playlistThreeIds,
                       playlistFourIds,
                       playlistPortfolioIds,
                       isLoading,
                   }) => {
    const [videos, setVideos] = useState(null);
    const [title, setTitle] = useState("all videos");
    const [sortBy, setSortBy] = useState("sorted by recent");
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);
    const [t, i18n] = useTranslation("global");

    const [showVideoEditing, setShowVideoEditing] = useState(false)
    const [showPhotos, setShowPhotos] = useState(false)
    const [showVideoGraphic, setShowVideoGraphic] = useState(false)

    useEffect(() => {
        fetchVideosFromPlaylist(
            playlistOneIds,
            playlistTwoIds,
            playlistThreeIds,
            playlistFourIds,
            setVideos
        );
    }, [playlistOneIds, playlistPortfolioIds, playlistThreeIds, playlistTwoIds, playlistFourIds]);

    const sortByViews = (videos) => {
        setSortBy("most viewed");
        const sortByViewsArr = [...videos];
        sortByViewsArr.sort((a, b) => {
            return b.statistics.viewCount - a.statistics.viewCount;
        });
        setVideos(sortByViewsArr);
        setSortBy("sorted by most viewed");
    };

    const sortByRecent = (videos) => {
        setSortBy("recent");
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
            playlistFourIds,
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

    const resetDiv = () => {
        var myDiv = document.querySelector(".moviesPanel");
        var currWidth = myDiv.clientHeight;
        myDiv.style.height = 800 + "px";
    };

    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const backToPanels = () => {
        setShowVideoGraphic(false);
        setShowVideoEditing(false);
        setShowPhotos(false);
    }
    const [index, setIndex] = useState(-1);

    const images = [{
        src: `https://lh3.googleusercontent.com/CSGKdYg9l7Udn_mDVTB2dd4YK8ou6fxg28PkxdDkOllMXkLCv3riB3Z3HUinCJjxSeeIVTh7-h30CnmwtrK08U4zZo4WLq6fzCU9b5wIIIzW6Ooe7d4AtsDzNjS3NXEDGfkPfjvNqw=w2219-h3328`,
        width: 2219,
        height: 3328
    }, {
        src: `https://lh3.googleusercontent.com/aC-Rjbm2nfU59BxvuScyjHy8GemxbgDr0V7XbeHgW4nDvGOcAlwGoR85d9oxcMXZ_3bex3P5TEK8bjEJV6zwO08uD9RDfTHV9Kcw8XU7Waem7rIBn8UbQD_VLWqwP-81n1pm2-OlHg=w7008-h4672`,
        width: 7008,
        height: 4672
    }, {
        src: `https://lh3.googleusercontent.com/vtMX6vs6eIUeGSxLxaPmPXqc4pBcjg7QVXcM6ZkVOAvM53SjaVvuJepukG_amwzPA3nEoWQ_KzUc_ss7bgSE5QhvEH2zNbtObCd5uvqKusux7w-06T2ABVHAfIsEOu93Brjb3HR6Hw=w7008-h4672`,
        width: 7008,
        height: 4672
    }, {
        src: "https://lh3.googleusercontent.com/UvWPd_wUM3JgPNJ2pW37GQxgQo4La7XZPEneznfUeCorQB9JSyOFKmtoLgbjw1SCjfpxXwdiWfk6CRA3_aSFM_8IXxE_FunSzOmUReomw5JvOaWqybA-__SM3b-k01ih_0BzHFqswA=w2400",
        width: 3072,
        height: 4672
    }, {
        src: "https://lh3.googleusercontent.com/YOuOMT4R84kKRxyqvjJwFFnicnNr9QsRowlMyqT7GNY5Hj86JuVuQDGG0KNY4wi1kU0fWCThN7TRs7_ZJ88etp545a_2poEVJjb3T7CKSD2AZj8LUsPA7ZJs2w2c08RSW6XfOOS40w=w2400",
        width: 3072,
        height: 4608
    }, {
        src: "https://lh3.googleusercontent.com/THYKTILxW49kb1_dj5OKFjDcpDD1RZ2qyMRn-1ez_hf5KPHW59V9Q3ldWLeSN42cWvJlEW1ArdNA-o7JVAERmsiGIN2h4wtgiG1d7f4VTbO7mJeqQGBKl7RhKYn5l8qcv6XMxBcaEg=w2400",
        width: 6427,
        height: 4285
    }]

    return (
        <>
            <div 
                className={clsx(styles.portfolioContainer, (showVideoEditing || showPhotos || showVideoGraphic) && styles.active)}>
                {
                    !showVideoEditing && !showPhotos && !showVideoGraphic && (
                        <div className={styles.panels}>
                            <div onClick={() => setShowPhotos(true)}>photos</div>
                            <div onClick={() => setShowVideoEditing(true)}>video editing</div>
                        </div>
                    )
                }
                {
                    showPhotos && (
                        <div className={styles.photosContainer}>
                            <div className={styles.titleContainer}>
                                <h1 className={styles.photosTitle}><i onClick={() => backToPanels()}
                                                                      className="fa fa-arrow-left"
                                                                      aria-hidden="true"/>Photos</h1>
                            </div>
                            <Lightbox
                                open={index >= 0}
                                close={() => {
                                    setIndex(-1);
                                }}
                                slides={images}
                                index={index}
                            />
                            <PhotoAlbum
                                layout="rows"
                                photos={images}
                                onClick={({index}) => {
                                    setIndex(index);
                                }}
                                targetRowHeight={150}
                                rowConstraints={{maxPhotos: 5}}
                            />
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
                            {title === 'all videos' ? <h1>{t('portfolio.all-videos')}</h1> : <h1>{t('portfolio.portfolio-message')}</h1>}
                            {sortBy === 'recent' ? <h2>{t('portfolio.sorted-by')} {t('portfolio.recent')}</h2> : <h2>{t('portfolio.sorted-by')} {t('portfolio.most-viewed')}</h2>}
                            </div>
                            <div className={styles.control}>
                            <p>{t("portfolio.filter-by")}:</p>
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
                                        onClick={() => {
                                            showAllVideos();
                                            resetDiv();
                                        }}
                                    >
                                                                    {t("portfolio.all-videos")}
                                    </ToggleButton>
                                    <ToggleButton
                                        className={styles.button}
                                        id="option2"
                                        value={2}
                                        variant="danger"
                                        onClick={() => {
                                            showPortfolio();
                                            resetDiv();
                                        }}
                                    >
                                        {t("portfolio.portfolio-message")}
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                <p>{t("portfolio.sort-by")}:</p>
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
                                            resetDiv();
                                        }}
                                    >
                                        {t("portfolio.recent")}
                                    </ToggleButton>
                                    <ToggleButton
                                        className={styles.button}
                                        value={2}
                                        id="sort2"
                                        variant="danger"
                                        onClick={() => {
                                            sortByViews(videos);
                                            resetDiv();
                                        }}
                                    >
                                        {t("portfolio.most-views")}
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
                                                <span>{t('portfolio.views')}: {movie.statistics.viewCount}</span>
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
    )
}

export default Portfolio;
