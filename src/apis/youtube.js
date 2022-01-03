import axios from 'axios'

const KEY = "AIzaSyA77Nm18iugGUH9Vp9BcmAafLPmQYwvMf4";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})