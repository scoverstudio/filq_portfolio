import axios from "axios";

const fetchVideosFromPlaylist = (
    ids,
    setVideos,
) => {
    const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";
    let arr = []
    const results = ids.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 50)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])

    results.forEach(result => {
        axios.get(
            `${YOUTUBE_VIDEO_API}?part=snippet&part=statistics&id=${result.toString()}&key=${
                process.env.REACT_APP_YOUTUBE_API_KEY
            }`
        ).then(res => {
            arr.push(...res.data.items)
            if (arr.length === ids.length) {
                setVideos(arr.sort((a, b) => {
                    return (
                        new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
                    );
                }))
            }
        })

    })
};

export default fetchVideosFromPlaylist;
