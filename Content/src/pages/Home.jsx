import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchPhoto } from "../Api/apiReq";
import RandomImage from "../Components/Randomimg";

const Home = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fungsi untuk mendapatkan query string dari URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("q"); // Ambil nilai dari ?q=...
    if (searchQuery) {
      setQuery(searchQuery);
      fetchSearchResults(searchQuery);
    }
  }, [location.search]);

  // Fungsi untuk memanggil API Unsplash
  const fetchSearchResults = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await searchPhoto(searchQuery);
      setResults(response.data.results);
    } catch (err) {
      console.error("Error fetching search results:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">
        Hasil Pencarian untuk "{query}"
      </h1>

      {/* Loader */}
      {loading && <p className="text-gray-500">Memuat hasil pencarian...</p>}

      {/* Tampilkan hasil pencarian */}
      {!loading && results.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {results.map((photo) => (
            <div key={photo.id} className="border rounded-lg overflow-hidden">
              <img
                src={photo.urls.small}
                alt={photo.alt_description || "Unsplash Image"}
                className="w-full h-auto"
              />
              <p className="p-2">{photo.alt_description || "Image"}</p>
            </div>
          ))}
        </div>
      )}

< RandomImage/>
    </div>
  );
};

export default Home;
