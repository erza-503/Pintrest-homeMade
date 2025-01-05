import React, { useState, useEffect } from "react";
import { getRandomPhoto } from "../Api/apiReq";

const RandomImage = () => {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        setLoading(true);
        const randomPhoto = await getRandomPhoto();
        setPhoto(randomPhoto); // Simpan data gambar
      } catch (error) {
        console.error("Failed to fetch random photo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div className="random-image-container p-5 text-center">
      {loading ? (
        <p>Loading random image...</p>
      ) : photo ? (
        <div>
          <img
            src={photo.urls.regular}
            alt={photo.alt_description || "Random Unsplash"}
            className="mx-auto rounded-lg shadow-md"
          />
          <p className="mt-2 text-gray-600">
            {photo.alt_description || "Beautiful Image"} by{" "}
            <a
              href={photo.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {photo.user.name}
            </a>
          </p>
        </div>
      ) : (
        <p className="text-red-500">Failed to load random image.</p>
      )}
    </div>
  );
};

export default RandomImage;
