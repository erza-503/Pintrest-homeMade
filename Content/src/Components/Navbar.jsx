import logo from  "../assets/Pinterest-logo.png"

const Navbar = () => {

    return (
      <div>
        <img src={logo} alt="Pinterest Logo" />
        <p>Beranda</p>
        <p>Jelajahi</p>
        <div className="flex flex-row gap-3 bg-slate-400 text-gray-100 w-max py-2 px-4 rounded-xl">
            <span className="magnifer" />
            <input type="text" placeholder="Search something" className="bg-transparent placeholder:text-white focus:outline-none"/>
        </div>
      </div>
    );
}

export default Navbar