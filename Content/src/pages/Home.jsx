import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar.jsx"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const PinterestLayout = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const dataPhoto = async () => {
      setLoading(true);
      try {
        const data = [];
        for (let index = 1; index <= 20; index++) {
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
      } catch (error) {
        setErr(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    dataPhoto();
  }, []);

  if (loading) return <p>Fetching data...</p>;
  if (err) return <p>{err}</p>;

  return (
    <div className="w-full px-4">
      <Navbar />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 4 }}>
        <Masonry gutter="16px">
          {photo.length > 0 ? (
            photo.map((random) => {
              const randomWidth = Math.floor(Math.random() * 200) + 200;
              const randomHeight = Math.floor(Math.random() * 300) + 300;

              return (
                <div
                  key={`image-${random.id}`}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://picsum.photos/seed/${random.id}/${randomWidth}/${randomHeight}`}
                    alt={`Random image with seed ${random.id}`}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center font-Noto-sans font-semibold mt-2">
                    {random.author}
                  </p>
                </div>
              );
            })
          ) : (
            <p>No photos available.</p>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default PinterestLayout;
