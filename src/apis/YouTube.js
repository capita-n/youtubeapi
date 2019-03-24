import axios from 'axios'

const KEY = 'AIzaSyAJy3RsMx1Q3P5zA6KIo95ID181p92Zuq8'

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

