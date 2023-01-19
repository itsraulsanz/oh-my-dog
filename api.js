import axios from 'axios'

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

export default {
    getData: () =>
    axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GATSBY_GOOGLE_PLACE_ID}&fields=rating,reviews,user_ratings_total&key=${process.env.GATSBY_GOGGLE_API_KEY}&language=es`,
        headers: { }
    })
}