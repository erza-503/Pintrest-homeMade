import logo from "../assets/Pinterest-logo.png";
import Profile from "../assets/Profile.jpg"
import {useLocation} from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path ;
  
  return (
    <div className="flex w-full justify-between align-middle items-center text-center gap-4 py-4 px-5">
      <div className="flex justify-between items-center w-[15%]">
        <img src={logo} alt="Pinterest Logo" className="w-8 m-2 rounded-full" />
        <div>
          <ul className="flex flex-row gap-3">
            <li>
              <a
                href="/"
                className={`Button-Nav ${
                  isActive("/") ? "Button-Nav-Active" : ""
                }`}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/jelajahi"
                className={`Button-Nav ${
                  isActive("/jelajahi") ? "Button-Nav-Active" : ""
                }`}
              >
                Jelajahi
              </a>
            </li>
            <li>
              <a
                href="/buat"
                className={`Button-Nav ${
                  isActive("/buat") ? "Button-Nav-Active" : ""
                }`}
              >
                Buat
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row gap-3 bg-slate-200 text-gray-500 mx-10 py-2 px-4 rounded-xl w-[75%]">
        <span className="magnifer" />
        <input
          type="text"
          placeholder="Search something"
          className="bg-transparent w-full placeholder: text-gray-500 focus:outline-none"
        />
      </div>

      <div className=" text-gray-500 flex flex-row gap-3 justify-center align-middle items-center w-[10%]">
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
