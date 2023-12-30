import axios from "axios";

const fetchVideosFromPlaylist = (
    allVideosIds,
    setVideos
) => {
    const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";

    const splitArrayIntoChunks = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const fetchVideoDetails = async () => {
        const chunks = splitArrayIntoChunks(allVideosIds, 50);

        const resultObject = {};
        await chunks.forEach((chunk, index) => {
            resultObject[index] = chunk;
        });

        const videosFinal = {};
        for (const [index, videoIdsChunk] of Object.entries(resultObject)) {
            try {
                const response = await axios.get(
                    `${YOUTUBE_VIDEO_API}?part=snippet,statistics&id=${videoIdsChunk.toString()}&key=${
                        process.env.REACT_APP_YOUTUBE_API_KEY
                    }`
                );

                videosFinal[index] = response.data.items;
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        }

        return videosFinal;
    };
    fetchVideoDetails(allVideosIds).then((videos) => {
        const arrayOfArrays = Object.values(videos);
        const mergedArray = [].concat(...arrayOfArrays);

        setVideos(
            mergedArray.sort((a, b) => {
                return (
                    new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
                );
            })
        );
    });
};

export default fetchVideosFromPlaylist;
