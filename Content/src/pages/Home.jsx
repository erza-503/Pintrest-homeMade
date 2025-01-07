import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  

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

//   if (loading) return <p>Fetching data...</p>;
//   if (err) return <p>{err}</p>;

useEffect(() => {
  const dataPhoto = async() => {
    setLoading(true)
    try{
      const response = await axios.get(`https://picsum.photos/seed/${index}/info`)
      setPhoto(response.data)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    } dataPhoto();
    }
  }, [])

 const renderImages = () => {
   const images = [];
   for (let index = 1; index < 10; index++) {
     images.push(
       <div key={`image-${index}`} className="p-4 border rounded-md shadow-md">
         <img
           src={`https://picsum.photos/seed/${index}/400/300`}
           alt={`Random image with seed ${index}`}
           className="rounded-md w-full h-auto"
         />
         <p className="mt-2 text-sm text-gray-600">
           {dataPhoto}
         </p>
       </div>
     );
   }
   return <div className="grid grid-cols-3 gap-4">{images}</div>;
 };


  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 m-2">
        {renderImages()}
        
        {renderImages()}
        {renderImages()}
      </div>
    <div>
      
    </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="grid w-max">
        {photo.length > 0 ? (
          photo.map((random) => (
            <div key={random.id} className="grid px-2">
              <img
                src={random.urls.small}
                alt={random.alt_description || "Random Photo"}
                className="h-auto w-min rounded-lg "
                />
              <p className="text-center font-Noto-sans font-semibold">
                {random.user.name}
              </p>
            </div>
          ))
        ) : (
          <p>No photos available.</p>
        )}
      </div>
        </div> */}
    </div>
  );
};

export default Home;
