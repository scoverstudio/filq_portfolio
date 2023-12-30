import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import Portfolio from "./components/views/Portfolio/Portfolio";
import {useEffect, useState} from "react";
import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import FilteredPortfolio from "./components/views/FilteredPortfolio/FilteredPortfolio";
import LoginPage from "./components/admin/LoginPage";
import {API_URL} from "./config";

function App() {
    const YOUTUBE_PLAYLIST_ITEMS_API =
        "https://www.googleapis.com/youtube/v3/playlistItems";
    const [playlistOneData, setPlaylistOneData] = useState(null);
    const [playlistTwoData, setPlaylistTwoData] = useState(null);
    const [playlistThreeData, setPlaylistThreeData] = useState(null);
    const [playlistFourData, setPlaylistFourData] = useState(null);
    const [playlistPortfolio, setPlaylistPortfolio] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [playlists, setPlaylists] = useState([]);
    const [allVideosIds, setAllVideosIds] = useState([]);
    const playlistOneIds = [];
    const playlistTwoIds = [];
    const playlistThreeIds = [];
    const playlistFourIds = [];
    const playlistPortfolioIds = [];

    const getPlaylists = async () => {
        try {
            const res = await fetch(
                `${API_URL}/playlists`
            );
            const data = await res.json();
            setPlaylists(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err.stack);
        }
    };

    const getVideosFromAPI = async () => {
        const videos = {};
        const videosIds = [];

        const fetchPromises = playlists.map(async (playlist, index) => {
            const res = await fetch(playlist.link);
            videos['playlist' + (index + 1)] = await res.json();
        });

        await Promise.all(fetchPromises);

        Object.keys(videos).forEach((key) => {
            if (!videos[key].error) {
                videos[key].items.forEach(item => {
                    videosIds.push(item.snippet.resourceId.videoId);
                });
            }
        });

        setAllVideosIds(videosIds)
    }
    const getPlaylistOne = async () => {
        try {
            const res = await fetch(
                `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLc3zz9UrBZ7IvD-10N88WtW9SBScN_a9K&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await res.json();
            setPlaylistOneData(data.items);
            setIsLoading(false);
        } catch (err) {
            console.log(err.stack);
        }
    };

    const getPlaylistTwo = async () => {
        try {
            const res = await fetch(
                `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLc3zz9UrBZ7LBAhGBuSEjRfd88I7rRTLL&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await res.json();
            setPlaylistTwoData(data.items);
            setIsLoading(false);
        } catch (err) {
            console.log(err.stack);
        }
    };

    const getPlaylistThree = async () => {
        try {
            const res = await fetch(
                `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLc3zz9UrBZ7I8BfzjEhhFliUSnVfi65eV&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await res.json();
            setPlaylistThreeData(data.items);
            setIsLoading(false);
        } catch (err) {
            console.log(err.stack);
        }
    };

    const getPlaylistFour = async () => {
        try {
            const res = await fetch(
                `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLc3zz9UrBZ7LxhqpLjuChh1sbsilyLWsV&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await res.json();
            setPlaylistFourData(data.items);
            setIsLoading(false);
        } catch (err) {
            console.log(err.stack);
        }
    };

    const getPortfolioPlaylist = async () => {
        try {
            const res = await fetch(
                `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLEmxBs67yX1xMJPrsKL2rehI9DMVA_96r&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const data = await res.json();
            setPlaylistPortfolio(data.items);
            setIsLoading(false);
        } catch (err) {
            console.log(err.stack);
        }
    };

    useEffect(() => {
        (async () => await getPlaylistOne())();
        (async () => await getPlaylistTwo())();
        (async () => await getPlaylistThree())();
        (async () => await getPlaylistFour())();
        (async () => await getPortfolioPlaylist())();
        (async () => await getPlaylists())();
    }, []);

    useEffect(() => {
        if (playlists.length > 0) {
            getVideosFromAPI();
        }
    }, [playlists])

    playlistOneData &&
    playlistOneData.forEach((item) =>
        playlistOneIds.push(item.snippet.resourceId.videoId)
    );

    playlistTwoData &&
    playlistTwoData.forEach((item) =>
        playlistTwoIds.push(item.snippet.resourceId.videoId)
    );
    playlistThreeData &&
    playlistThreeData.forEach((item) =>
        playlistThreeIds.push(item.snippet.resourceId.videoId)
    );
    playlistFourData &&
    playlistFourData.forEach((item) =>
        playlistFourIds.push(item.snippet.resourceId.videoId)
    );
    playlistPortfolio &&
    playlistPortfolio.forEach((item) =>
        playlistPortfolioIds.push(item.snippet.resourceId.videoId)
    );

    return (
        <Provider store={store}>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route
                            path="/portfolio"
                            element={
                                <Portfolio
                                    allVideosIds={allVideosIds}
                                    playlistOneIds={playlistOneIds}
                                    playlistTwoIds={playlistTwoIds}
                                    playlistThreeIds={playlistThreeIds}
                                    playlistFourIds={playlistFourIds}
                                    playlistPortfolioIds={playlistPortfolioIds}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route
                            path="/portfolio/:id"
                            element={
                                <FilteredPortfolio
                                    allVideosIds={allVideosIds}
                                    playlistOneIds={playlistOneIds}
                                    playlistTwoIds={playlistTwoIds}
                                    playlistThreeIds={playlistThreeIds}
                                    playlistFourIds={playlistFourIds}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </MainLayout>
            </Router>
        </Provider>
    );
}

export default App;
