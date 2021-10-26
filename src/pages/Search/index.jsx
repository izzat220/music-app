import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";

const Search = () => {
	const [album, setAlbum] = useState();

	const getAlbum = async () => {
		let response = await axios
			.get("http://localhost:8081/test")
			.catch((err) => console.log(err));
		setAlbum(response.data);

		console.log(response.data);
	};

	useEffect(() => {
		getAlbum();
	}, []);

	return (
		<div className="m-auto p-5" style={{ width: "1366px", height: "766px" }}>
			{!album && <span>Loading...</span>}
			{album && (
				<div
					className="flex flex-col rounded-3xl shadow-xl"
					style={{ width: "300px" }}
				>
					<img
						src="https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8"
						alt=""
						width="300px"
						className="rounded-t-3xl"
					/>

					<div className="flex flex-col p-5">
						<span className="text-sm text-red-400 font-semibold">
							{album.artists[0].name}
						</span>
						<span className="font-bold text-xl">{album.name}</span>
					</div>
				</div>
			)}

			<Modal />
		</div>
	);
};

export default Search;
