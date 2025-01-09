import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
   const [err, setErr] = useState(null);

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("https://picsum.photos/seed/picsum/200/300");
  //       setPhoto(response.data);
  //     } catch (error) {
  //       console.error("Error fetching photos:", error);
  //       setErr("Failed to fetch photos from Unsplash.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchPhotos();
  // }, []);

  //  const renderImages = () => {
  //    const images = [];
  //    for (let index = 1; index < 10; index++) {
  //      images.push(
  //        <div key={`image-${index}`} className="p-4 border rounded-md shadow-md">
  //          <img
  //            src={`https://picsum.photos/seed/${index}/400/300`}
  //            alt={`Random image with seed ${index}`}
  //            className="rounded-md w-full h-auto"
  //          />
  //          <p className="mt-2 text-sm text-gray-600">
  //            {dataPhoto}
  //          </p>
  //        </div>
  //      );
  //    }
  //    return <div className="grid grid-cols-3 gap-4">{images}</div>;
  //  };

  useEffect(() => {
    const dataPhoto = async () => {
      setLoading(true);
      try {
        const data = [];
        for (let index = 1; index < Math.floor(Math.random()*10)*2; index++) {
          data.push(
            axios
              .get(`https://picsum.photos/seed/${index}/info`)
              .then((res) => ({
                id: index,
                ...res.data,
              }))
          );
        }
        const Hasildata = await Promise.all(data);
        setPhoto(Hasildata);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    dataPhoto()
  }, []);

    if (loading) return <p>Fetching data...</p>;
    if (err) return <p>{err}</p>;

    const randomPhoto = () =>{
      return (
        <div className="flex flex-col w-max ">
          {photo.length > 0 ? (
            photo.map((random) => {
              const randomWeight = Math.floor(Math.random() * 200) + 200;
              const randomHeight = Math.floor(Math.random() * 300) + 300;
              return (
                <div key={`image-${random.id}`} className="grid px-2 ">
                  <img
                    src={`https://picsum.photos/seed/${random.id}/${randomWeight}/${randomHeight}`}
                    alt={`Random image with seed ${random.id}`}
                    className="h-auto w-min rounded-lg "
                  />
                  <p className="text-center font-Noto-sans font-semibold">
                    {random.author}
                  </p>
                </div>
              );
            })
          ) : (
            <p>No photos available.</p>
          )}
        </div>
      );
    }

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-4 w-full">
        {randomPhoto()}
        {randomPhoto()}
        {randomPhoto()}
      </div>
    </div>
  );
};

export default Home;
