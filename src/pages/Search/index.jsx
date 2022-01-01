import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import AlbumModal from "../../components/AlbumModal/index";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";

const Search = ({ user }) => {
	const [albums, setAlbums] = useState();
	const [selectedAlbum, setSelectedAlbum] = useState();
	const [search, setSearch] = useState("");
	const [showAlbumDetails, setShowAlbumDetails] = useState(false);
	const [userAlbums, setUserAlbums] = useState([]);

	const searchAlbums = async () => {
		setAlbums("Loading");
		let response = await axios
			.get("http://localhost:8081/search", {
				params: { search },
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

	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full">
				<Sidebar />

				<div className="flex flex-col w-full mb-20">
					<div className="flex flex-row w-full items-center justify-between mb-16">
						<span className="text-purple-400 font-bold text-3xl ">Albums</span>

						<div className="flex flex-row">
							<input
								className="border-2 rounded-md p-2 outline-none text-sm mr-2 w-96 text-white"
								style={{
									backgroundColor: "rgb(30,30,30)",
									borderColor: "rgb(30,30,30)",
								}}
								placeholder="Search albums, artist, or songs ..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<button onClick={searchAlbums} className="primary">
								Search Albums
							</button>
						</div>
					</div>

					{albums === "Loading" ? (
						<Loading />
					) : (
						<div className="grid grid-cols-4 gap-5 w-full">
							{albums &&
								albums.map((album, i) => {
									return (
										<motion.div
											className="flex flex-col rounded-xl"
											style={{ width: "250px", backgroundColor: "rgb(33,33,33)" }}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.1 * i }}
										>
											<img
												src={album.images[1]?.url}
												alt=""
												width="300px"
												className="rounded-t-xl"
												style={{ height: "250px" }}
											/>

											<div className="flex flex-col w-full p-3">
												<div className="flex flex-col mb-3">
													<span class="font-bold text-sm text-purple-400">
														{album.artists[0].name}
													</span>
													<span
														className="font-bold text-gray-300"
														style={{
															overflow: "hidden",

															lineHeight: "20px",
															height: "40px",
														}}
													>
														{album.name}
													</span>
												</div>

												<div className="flex flex-row w-full">
													{userAlbums.includes(album.id) ? (
														<button
															className="secondary w-full mr-2"
															onClick={() => removeAlbum(album.id)}
														>
															Added
														</button>
													) : (
														<button
															className="primary w-full mr-2"
															onClick={() => addAlbum(album.id)}
														>
															Add to List
														</button>
													)}

													<button
														className="text-sm text-purple-400 border-2 border-purple-400 pl-3 pr-3 rounded-md font-bold hover:text-purple-500 hover:border-purple-500 active:text-purple-600 active:border-purple-600"
														onClick={() => {
															setSelectedAlbum(album.id);
															setShowAlbumDetails(true);
														}}
													>
														<i class="fas fa-list-ul" />
													</button>
												</div>
											</div>
										</motion.div>
									);
								})}
						</div>
					)}
				</div>
			</div>
			<AlbumModal
				albumId={selectedAlbum}
				showModal={showAlbumDetails}
				setShowModal={setShowAlbumDetails}
			/>
		</div>
	);
};

export default Search;
