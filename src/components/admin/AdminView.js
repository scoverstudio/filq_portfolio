import styles from "./AdminView.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../config";
import AdminPlaylistsView from "./AdminPlaylistsView";
import AdminPhotosView from "./AdminPhotosView";

const AdminView = ({role}) => {
    const [sectionName, setSectionName] = useState('playlists')

    return (
        <div className={styles.adminPanel}>
            <h1>ADMIN</h1>
            <div className={styles.adminButtons}>
                <button onClick={() => setSectionName('playlists')}>PLAYLISTS</button>
                <button onClick={() => setSectionName('photos')}>PHOTOS</button>
            </div>
            {sectionName === 'playlists' ? (
                <AdminPlaylistsView role={role}/>
            ) : (
                <AdminPhotosView role={role}/>
            )}
        </div>
    )
}

export default AdminView;