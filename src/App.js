import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import Portfolio from "./components/views/Portfolio/Portfolio";
import { useEffect, useState } from "react";
import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";

function App() {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const ids = [];

  useEffect(() => {
    const getServerSideProps = async () => {
      try {
        const res = await fetch(
          `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLEmxBs67yX1zyfrwEqikC-ZZ4T0DY672r&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const data = await res.json();
        setData(data.items);
        setIsLoading(false);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await getServerSideProps())();
  }, []);
  fetch(`./netlify/functions/fetch-playlist`).then((res) => {
    console.log(res.json());
  });
  data && data.forEach((item) => ids.push(item.snippet.resourceId.videoId));
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/portfolio"
            element={<Portfolio ids={ids} isLoading={isLoading} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
