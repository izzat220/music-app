import axios from "axios";
import React, { useEffect, useState } from "react";
import AlbumModal from "../../components/AlbumModal";
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
					<div className="flex flex-row mb-5">
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

					<span className="text-purple-400 font-bold text-3xl mb-5">Albums</span>

					<div className="grid grid-cols-4 gap-5 w-full">
						{albums &&
							albums.map((album) => {
								return (
									<div
										className="flex flex-col rounded-xl"
										style={{ width: "250px", backgroundColor: "rgb(30,30,30)" }}
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
												<span className="font-bold text-gray-300">{album.name}</span>
												<span className="text-gray-400 text-xs">Album (12 Tracks)</span>
											</div>

											<div className="flex flex-row w-full">
												<button className="primary w-full mr-2">Add to List</button>
												<AlbumModal />
											</div>
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
