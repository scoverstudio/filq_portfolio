import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import Portfolio from "./components/views/Portfolio/Portfolio";
import {useEffect, useState} from "react";
import About from "./components/views/About/About";
import Contact from "./components/views/Contact/Contact";
import {Provider, useSelector} from "react-redux";
import {store} from "./redux/store";
import FilteredPortfolio from "./components/views/FilteredPortfolio/FilteredPortfolio";
import LoginPage from "./components/admin/LoginPage";
import axios from "axios";
import {API_URL} from "./config";

function App() {
    const role = useSelector(state => state.users.role)
    const [filter, setFilter] = useState("all videos")
    const [isLoading, setIsLoading] = useState(true);
    const [ids, setIds] = useState([]);

    const getPlaylists = async () => {
        setIsLoading(true)
        let playlists = []
        let ids = []
        await axios.request({
            url: `${API_URL}/playlists`,
            method: "GET"
        }).then(res => playlists = res.data)

        if (playlists.length > 0) {
            await axios.all(playlists.filter(playlist => filter === "all videos" ? playlist : playlist.isPortfolio).map(playlist => axios.get(playlist.link))).then(res => {
                res.forEach((item) => {
                    item.data.items.forEach(i => ids.push(i.snippet.resourceId.videoId))
                })
            })
        }
        setIds(ids)
        setIsLoading(false)
    };

    useEffect(() => {
        getPlaylists();
    }, [role, filter]);

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
                                    ids={ids}
                                    setFilter={setFilter}
                                    filter={filter}
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
                                    ids={ids}
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
