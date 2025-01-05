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

export const getRandomPhoto = async () => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      headers: {
        Authorization: `Client-ID ${accses_key}`,
      },
    });
    return response.data; // Data gambar acak
  } catch (error) {
    console.error("Error fetching random photo:", error);
    throw error;
  }
};