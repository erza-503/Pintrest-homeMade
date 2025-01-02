import logo from  "../assets/Pinterest-logo.png"

const Navbar = () => {

    return (
      <div className="flex w-full justify-between align-middle items-center text-center">
        <img src={logo} alt="Pinterest Logo" className="w-6 m-2" />
        <div>
          <ul className="flex flex-row gap-3 ">
            <li>
              <a href="">Beranda</a>
            </li>
            <li>
              <a href="">Jelajahi</a>
            </li>
            <li>
              <a href="">Buat</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 bg-slate-200 text-gray-500 w-max py-2 px-4 rounded-xl">
          <span className="magnifer" />
          <input
            type="text"
            placeholder="Search something"
            className="bg-transparent placeholder: text-gray-500 focus:outline-none"
          />
        </div>
        <div className=" text-gray-500">
          <span className="bell"></span>
          <span className="chat"></span>
        </div>
      </div>
    );
}

export default Navbar