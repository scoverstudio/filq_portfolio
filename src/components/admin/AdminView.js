import styles from "./AdminView.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../config";

const AdminView = ({role}) => {
    const YOUTUBE_PLAYLIST_ITEMS_API =
        "https://www.googleapis.com/youtube/v3/playlistItems";
    const [playlists, setPlaylists] = useState([])

    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [isPortfolio, setIsPortfolio] = useState(false)
    const [showLink, setShowLink] = useState(null)

    useEffect(() => {
        axios.request({
            url: `API_URL/playlists`,
            method: "GET"
        }).then(res => setPlaylists(res.data))
    }, [role]);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.request({
            url: `${API_URL}/playlists`,
            method: "POST",
            data: {
                name,
                link: `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${link}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
                isPortfolio: isPortfolio
            }
        }).then(res => setPlaylists([...playlists, res.data]))
        setIsPortfolio(false)
    }

    const handleDelete = (e, id, index) => {
        e.preventDefault()
        setPlaylists(playlists.filter((playlist, playlistIndex) => playlistIndex !== index))
        axios.request({
            url: `${API_URL}/playlists/${id}`,
            method: "DELETE",
        })
    }

    return (
        <>
            <h1>ADMIN</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <span>example of playlist id: https://www.youtube.com/playlist?list=<em>PLEmxBs67yX1yViKzCtXs0a4UxXO8I0oZ6</em></span>
                <fieldset>
                    <label>Name</label>
                    <input onChange={(e) => setName(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Link</label>
                    <input onChange={(e) => setLink(e.target.value)} placeholder="Highlighted code"/>
                </fieldset>
                <fieldset>
                    <label>Portfolio: </label>
                    <input type="checkbox" onChange={() => setIsPortfolio(!isPortfolio)}/>
                </fieldset>
                <button type="submit">Add</button>
            </form>
            <div className={styles.playlistsContainer}>
                <div className={styles.portfolioPlaylists}>
                    <span>Portfolio playlist</span>
                    {playlists.filter(playlist => playlist.isPortfolio).map((playlist, index) => (
                        <div className={styles.singlePlaylist}>
                            <div>Title: {playlist.name}</div>
                            <div className={styles.showLink}
                                 onClick={() => showLink === playlist.id ? setShowLink(null) : setShowLink(playlist.id)}>show
                                link
                            </div>
                            {showLink === playlist.id && <div className={styles.link}>{playlist.link}</div>}
                            <button onClick={(e) => handleDelete(e, playlist.id, index)}>delete</button>
                        </div>

                    ))}
                </div>
                <div className={styles.generalPlaylists}>
                    <span>General playlist</span>
                    {playlists.filter(playlist => !playlist.isPortfolio).map((playlist, index) => (
                        <div className={styles.singlePlaylist}>
                            <div>Title: {playlist.name}</div>
                            <div className={styles.showLink}
                                 onClick={() => showLink === playlist.id ? setShowLink(null) : setShowLink(playlist.id)}>show
                                link
                            </div>
                            {showLink === playlist.id && <div className={styles.link}>{playlist.link}</div>}
                            <button onClick={(e) => handleDelete(e, playlist.id, index)}>delete</button>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminView;