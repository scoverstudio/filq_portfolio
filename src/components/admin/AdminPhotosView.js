import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_URL} from "../../config";
import styles from "./AdminView.module.scss";

const AdminPhotosView = ({role}) => {
    const [photos, setPhotos] = useState([])

    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        axios.request({
            url: `${API_URL}/photos`,
            method: "GET"
        }).then(res => setPhotos(res.data))
    }, [role]);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.request({
            url: `${API_URL}/photos`,
            method: "POST",
            data: {
                name,
                link,
                height,
                width
            }
        }).then(res => setPhotos([...photos, res.data]))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <span>Use this site to generate photo link: <a onClick={() => window.open('https://www.labnol.org/embed/google/photos/#google_vignette', '_blank')}>click!</a></span>
                <fieldset>
                    <label>Name</label>
                    <input onChange={(e) => setName(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Link</label>
                    <input onChange={(e) => setLink(e.target.value)} placeholder="Link generated from site above!"/>
                </fieldset>
                <fieldset>
                    <label>Height</label>
                    <input onChange={(e) => setHeight(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Width</label>
                    <input onChange={(e) => setWidth(e.target.value)}/>
                </fieldset>
                <button type="submit">Add</button>
            </form>
            <div className={styles.photosContainer}>
                {photos.map(photo => (
                    <div>{photo.name}</div>
                ))}
            </div>
        </div>
    );
};

export default AdminPhotosView;
