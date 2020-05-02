import axios from 'axios';

// DEF: Configuration for Axios
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})