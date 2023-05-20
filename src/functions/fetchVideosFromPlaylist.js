import axios from "axios";

const fetchVideosFromPlaylist = (
    playlistOneIds,
    playlistTwoIds,
    playlistThreeIds,
    playlistFourIds,
    setVideos
) => {
    const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";

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
    const getPlaylistFour = axios.get(
        `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${playlistFourIds.toString()}&key=${
            process.env.REACT_APP_YOUTUBE_API_KEY
        }`
    );

    axios.all([getPlaylistOne, getPlaylistTwo, getPlaylistThree, getPlaylistFour]).then(
        axios.spread((...allData) => {
            const playlistOne = allData[0].data.items;
            const playlistTwo = allData[1].data.items;
            const playlistThree = allData[2].data.items;
            const playlistFour = allData[3].data.items;

            setVideos(
                [...playlistOne, ...playlistTwo, ...playlistThree, ...playlistFour].sort((a, b) => {
                    return (
                        new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
                    );
                })
            );
        })
    );
};

export default fetchVideosFromPlaylist;
