import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";

const Search = () => {
	let arr = [1];

	const [albums, setAlbums] = useState();
	const [artists, setArtists] = useState();

	const [search, setSearch] = useState("");

	const searchAlbums = async () => {
		let response = await axios
			.get("http://localhost:8081/search", {
				params: { search },
			})
			.catch((err) => console.log(err));

		console.log(response.data);
		setAlbums(response.data.albums);
		setArtists(response.data.artists);
	};

	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full">
				<Sidebar />

				<div className="flex flex-col">
					<div className="d-flex flex-row">
						<input
							className="border-2 rounded-md p-2 outline-none mb-5 text-xs mr-2 w-96"
							placeholder="Search Albums..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button
							onClick={searchAlbums}
							className="bg-purple-700 text-white text-xs p-2 rounded-md border-2 border-purple-700 font-bold mr-2 hover:bg-purple-800 active:bg-purple-900"
						>
							Search Albums
						</button>
					</div>

					<span className="text-purple-700 font-bold text-3xl">Artists</span>
					<hr className="w-full mb-5 mt-1 border-1 border-opacity-30 border-purple-700" />

					<div className="grid grid-cols-4 gap-5 mb-12">
						{artists &&
							artists.map((artist) => {
								if (artist.images[1]) {
									return (
										<div className="flex flex-row rounded-xl shadow-md ">
											{artist.images[1] && (
												<img
													src={artist.images[2]?.url}
													alt=""
													className="rounded-l-lg"
													style={{ width: "100px", height: "100px" }}
												/>
											)}

											<div className="flex flex-col p-2 w-full justify-between">
												<div className="flex flex-col">
													<span className="text-purple-700 font-bold text-sm">
														{artist.name}
													</span>
													<span className="text-gray-500 text-xs">Artist</span>
												</div>

												<button className="bg-purple-700 text-white text-xs rounded-md font-bold w-full hover:bg-purple-800 active:bg-purple-900 p-1">
													Follow
												</button>
											</div>
										</div>
									);
								}
							})}
					</div>

					<span className="text-purple-700 font-bold text-3xl">Albums</span>
					<hr className="w-full mb-5 mt-1 border-1 border-opacity-30 border-purple-700" />

					<div className="grid grid-cols-4 gap-5">
						{albums &&
							albums.map((album) => {
								return (
									<div
										className="flex flex-col rounded-xl shadow-md"
										style={{ width: "250px" }}
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
												<span class="font-bold text-sm text-purple-700">
													{album.artists[0].name}
												</span>
												<span className="font-bold">{album.name}</span>
												<span className="text-gray-500 text-xs">Album (12 Tracks)</span>
											</div>

											<button className="bg-purple-700 text-white text-xs p-2 pr-3 pl-3 rounded-md font-bold mr-2 hover:bg-purple-800 active:bg-purple-900">
												Add to List
											</button>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
