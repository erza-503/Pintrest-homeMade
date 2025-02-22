import logo from "../assets/Pinterest-logo.png";
import Profile from "../assets/Profile.jpg";
import { NavLink } from "react-router-dom";
import { MagnifyingGlassIcon, BellIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
	const navItems = [
		{ name: "Beranda", to: "/" },
		{ name: "Jelajahi", to: "/jelajahi" },
		{ name: "Buat", to: "/buat" },
	];

	return (
		<div className="flex w-full justify-between items-center py-4 px-5 shadow-md bg-white fixed top-0 z-50">
			{/* Logo dan Navigasi */}
			<div className="flex items-center gap-4">
				<img src={logo} alt="Pinterest Logo" className="w-10 rounded-full" />
				<ul className="hidden lg:flex gap-5">
					{navItems.map((item) => (
						<li key={item.to}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									`Button-Nav ${isActive ? "Button-Nav-Active" : ""} hover:text-black`
								}
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>

			{/* Search Bar */}
			<div className="relative w-full max-w-2xl mx-10">
				<span className="absolute inset-y-0 left-0 flex items-center pl-3">
					<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
				</span>
				<input
					type="text"
					placeholder="Search something"
					className="bg-gray-100 w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
				/>
			</div>

			{/* Icons dan Profile */}
			<div className="flex items-center gap-4">
				<BellIcon className="h-6 w-6 text-gray-500 hover:text-black cursor-pointer transition duration-300" />
				<ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-gray-500 hover:text-black cursor-pointer transition duration-300" />
				<img
					src={Profile}
					alt="Profile Picture"
					className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-red-400 cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Navbar;
