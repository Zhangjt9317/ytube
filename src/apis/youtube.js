import axios from 'axios';

const KEY = "AIzaSyBnN9egmh_55k2_h-wqtxmdXZ3ockKUS5I";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    }
});

