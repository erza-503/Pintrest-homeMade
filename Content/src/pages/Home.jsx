import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "react-intersection-observer";

// Komponen LazyImage dengan React.memo untuk optimalisasi
const LazyImage = memo(({ src, alt, author }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div
			ref={ref}
			className="rounded-lg overflow-hidden shadow-lg transition duration-300 hover:scale-105"
		>
			{inView ? (
				<img
					src={src}
					alt={alt}
					loading="lazy"
					decoding="async"
					className="w-full h-auto rounded-lg transition-opacity duration-500 opacity-100"
				/>
			) : (
				// Placeholder shimmer loading
				<div className="w-full h-72 bg-gray-300 animate-pulse rounded-lg"></div>
			)}
			<p className="text-center font-Noto-sans font-semibold mt-2">
				{author}
			</p>
		</div>
	);
});

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
			<div className="mt-20">
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 4 }}
				>
					<Masonry gutter="16px">
						{photo.length > 0 ? (
							photo.map((random) => {
								const randomWidth =
									Math.floor(Math.random() * 200) + 200;
								const randomHeight =
									Math.floor(Math.random() * 300) + 300;
								const imageUrl = `https://picsum.photos/seed/${random.id}/${randomWidth}/${randomHeight}`;
								return (
									<LazyImage
										key={`image-${random.id}`}
										src={imageUrl}
										alt={`Image by ${random.author}`}
										author={random.author}
									/>
								);
							})
						) : (
							<p>No photos available.</p>
						)}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	);
};

export default PinterestLayout;
