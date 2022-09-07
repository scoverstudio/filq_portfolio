import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import Portfolio from "./components/views/Portfolio/Portfolio";
import { useEffect, useState } from "react";
import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import FilteredPortfolio from "./components/views/FilteredPortfolio/FilteredPortfolio";

function App() {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  const [playlistOneData, setPlaylistOneData] = useState(null);
  const [playlistTwoData, setPlaylistTwoData] = useState(null);
  const [playlistThreeData, setPlaylistThreeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const playlistOneIds = [];
  const playlistTwoIds = [];
  const playlistThreeIds = [];

  const getPlaylistOne = async () => {
    try {
      const res = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLEmxBs67yX1yViKzCtXs0a4UxXO8I0oZ6&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
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
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLEmxBs67yX1x14cR5rghalf09kGK3MaZj&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
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
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLEmxBs67yX1xcp79WMzuBLf7ub4ut6AcU&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      setPlaylistThreeData(data.items);
      setIsLoading(false);
    } catch (err) {
      console.log(err.stack);
    }
  };

  useEffect(() => {
    (async () => await getPlaylistOne())();
    (async () => await getPlaylistTwo())();
    (async () => await getPlaylistThree())();
  }, []);

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

  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/portfolio"
              element={
                <Portfolio
                  playlistOneIds={playlistOneIds}
                  playlistTwoIds={playlistTwoIds}
                  playlistThreeIds={playlistThreeIds}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/portfolio/:id"
              element={
                <FilteredPortfolio
                  playlistOneIds={playlistOneIds}
                  playlistTwoIds={playlistTwoIds}
                  playlistThreeIds={playlistThreeIds}
                  isLoading={isLoading}
                />
              }
            />
          </Routes>
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
