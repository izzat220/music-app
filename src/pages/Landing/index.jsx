import axios from "axios";
import React, { useEffect, useState } from "react";
import AlbumModal from "../../components/AlbumModal/index";
import Hero from "./Hero";
import Steps from "./Steps";

const Landing = ({ user }) => {
	const [albums, setAlbums] = useState();
	const [selectedAlbum, setSelectedAlbum] = useState();
	const [search, setSearch] = useState("");
	const [showAlbumDetails, setShowAlbumDetails] = useState(false);
	const [userAlbums, setUserAlbums] = useState([]);

	const searchAlbums = async (value) => {
		setAlbums("Loading");
		let response = await axios
			.get("http://localhost:8081/search", {
				params: { search: value },
				withCredentials: true,
			})
			.catch((err) => console.log(err));

		console.log(response.data);
		setAlbums(response.data.albums);
	};

	const fetchUserAlbums = async () => {
		let response = await axios
			.get("http://localhost:8081/albums/getUserAlbums", {
				params: { username: user.username },
				withCredentials: true,
			})
			.catch((err) => console.log(err));
		setUserAlbums(response.data.albums);

		console.log(response.data.albums);
	};

	const addAlbum = async (albumId) => {
		let response = await axios
			.post(
				"http://localhost:8081/albums/likeAlbum",
				{ albumId },
				{ withCredentials: true }
			)
			.catch((err) => console.log(err));
		setUserAlbums(response.data.albums);
	};

	const removeAlbum = async (albumId) => {
		let response = await axios
			.post(
				"http://localhost:8081/albums/unlikeAlbum",
				{ albumId },
				{ withCredentials: true }
			)
			.catch((err) => console.log(err));
		setUserAlbums(response.data.albums);
	};

	useEffect(() => {
		fetchUserAlbums();
	}, []);

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	return (
		<>
			<div className="flex flex-row w-full items-center justify-between">
				<span className="text-gray-200 text-5xl font-bold">Discover Music</span>

				<input
					className="rounded-lg p-2 text-gray-200 border-2 outline-none focus:border-gray-600"
					placeholder="Search Albums..."
					style={{
						backgroundColor: "rgb(44,44,44)",
						borderColor: "rgb(44,44,44)",
						minWidth: "300px",
					}}
					onInput={(e) => searchAlbums(e.target.value)}
				/>
			</div>

			<div className="w-full flex flex-col mt-10">
				<div
					className="w-full flex flex-col"
					style={{
						borderRadius: "15px",
						backgroundColor: "rgb(33,33,33)",
					}}
				>
					<div className="flex flex-col w-full">
						{albums === "Loading" ? (
							<span>Loading</span>
						) : (
							albums &&
							albums.map((album, index) => {
								return (
									<div
										className={
											"flex flex-row w-full items-center justify-between p-4 " +
											(index < albums.length - 1 ? "border-b-2" : "")
										}
										style={{ borderColor: "rgb(44,44,44)" }}
									>
										<div className="flex flex-row items-center w-full">
											<img
												src={album.images[1].url}
												alt=""
												width="64px"
												height="64px"
												className="rounded-lg mr-3"
											/>
											<div className="flex flex-col">
												<span className="text-gray-400 text-xs">{album.album_type}</span>
												<span className="text-gray-50 font-bold">{album.name}</span>

												<span className="text-gray-400 text-sm ">
													by <span className="font-bold">{album.artists[0].name}</span>
												</span>
											</div>
										</div>

										<span
											className="text-gray-400 font-semibold text-sm"
											style={{ minWidth: "200px" }}
										>
											{album.total_tracks} Tracks
										</span>

										<div className="flex flex-row text-gray-500">
											<i
												className="fas fa-bars mr-5 cursor-pointer hover:text-gray-200"
												onClick={() => {
													setSelectedAlbum(album.id);
													setShowAlbumDetails(true);
												}}
											/>
											<i
												className="fas fa-heart cursor-pointer hover:text-gray-200"
												style={{
													color: userAlbums.includes(album.id) ? "hsl(286, 100%, 54%)" : "",
												}}
												onClick={() => {
													if (userAlbums.includes(album.id)) {
														removeAlbum(album.id);
													} else {
														addAlbum(album.id);
													}
												}}
											/>
										</div>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
			<AlbumModal
				albumId={selectedAlbum}
				showModal={showAlbumDetails}
				setShowModal={setShowAlbumDetails}
			/>
		</>
	);
};

export default Landing;
