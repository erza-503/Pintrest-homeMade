import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: { count: 10 },
            headers: {
              Authorization: `Client-ID HMlMKZkGNFoNmw2xlb1DJFRS1xFS8GMYdXibTwpl7KY`, // API Key disembunyikan
            },
          }
        );
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setErr("Failed to fetch photos from Unsplash.");
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

//   if (loading) return <p>Fetching data...</p>;
//   if (err) return <p>{err}</p>;

  return (
    <div>
      <Navbar />
      <div>
        {photo.length > 0 ? (
          photo.map((random) => (
            <div key={random.id}>
              <img
                src={random.urls.small}
                alt={random.alt_description || "Random Photo"}
              />
              <p>{random.user.name}</p>
            </div>
          ))
        ) : (
          <p>No photos available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
