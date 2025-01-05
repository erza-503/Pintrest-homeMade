import axios from "axios"

const accses_key = "HMlMKZkGNFoNmw2xlb1DJFRS1xFS8GMYdXibTwpl7KY"; ;

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accses_key}`,
  },
});

export const searchPhoto = (query, perpage = 10 ) =>{
    return unsplashApi.get("/search/photos", {
        params: {
            query,
            per_page: perpage
        }
    })
}