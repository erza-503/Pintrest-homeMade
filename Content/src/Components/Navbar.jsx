import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { searchPhoto } from "../Api/apiReq";
import logo from "../assets/Pinterest-logo.png";
import Profile from "../assets/Profile.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const isActive = (path) => location.pathname === path;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Pastikan input tidak kosong
    try {
      navigate(`/search?q=${query}`); // Arahkan ke halaman hasil pencarian
    } catch (err) {
      console.error("Error navigating to search page:", err);
    }
  };

  return (
    <div className="flex w-full justify-between items-center gap-4 pt-4 px-5">
      {/* Logo dan Navigasi */}
      <div className="flex justify-between items-center w-[15%]">
        <img src={logo} alt="Pinterest Logo" className="w-8 m-2 rounded-full" />
        <div>
          <ul className="flex flex-row gap-3">
            <li>
              <Link
                to="/"
                className={`Button-Nav ${
                  isActive("/") ? "Button-Nav-Active" : ""
                }`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/jelajahi"
                className={`Button-Nav ${
                  isActive("/jelajahi") ? "Button-Nav-Active" : ""
                }`}
              >
                Jelajahi
              </Link>
            </li>
            <li>
              <Link
                to="/buat"
                className={`Button-Nav ${
                  isActive("/buat") ? "Button-Nav-Active" : ""
                }`}
              >
                Buat
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Form Pencarian */}
      <form
        onSubmit={handleSearch}
        className="flex flex-row gap-3 bg-slate-200 text-gray-500 mx-10 py-2 px-4 rounded-xl w-[75%]"
      >
        <span className="magnifier"></span>
        <input
          type="text"
          placeholder="Search something"
          className="bg-transparent w-full placeholder:text-gray-500 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* Ikon dan Profil */}
      <div className="text-gray-500 flex flex-row gap-3 justify-center items-center w-[10%]">
        <span className="bell"></span>
        <span className="chat"></span>
        <img
          src={Profile}
          alt="Profile Picture"
          className="w-8 m-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
