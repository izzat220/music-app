import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";
import axios from "axios";
import moment from "moment";

let arr = [1, 2, 3, 4, 5, 6, 7];
function Content({ albumId, setShowModal }) {
	const [albumDetails, setAlbumDetails] = useState();

	const fetchAlbumData = async () => {
		let response = await axios
			.get("http://localhost:8081/getAlbum", {
				params: { albumId },
			})
			.catch((err) => console.log(err));

		console.log(response.data);
		setAlbumDetails(response.data);
	};

	useEffect(() => {
		fetchAlbumData();
	}, []);

	Content.handleClickOutside = () => setShowModal(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: "anticipate", duration: 0.5, delay: 0.2 }}
			exit={{
				opacity: 0,
				y: 100,
				transition: { ease: "easeOut", duration: 0.2 },
			}}
			className="rounded-lg shadow-lg relative flex flex-col w-100 p-7"
			style={{
				backgroundColor: "rgb(33,33,33)",
				width: "650px",
			}}
		>
			{albumDetails && (
				<>
					<div className="flex flex-row w-full mb-5">
						<img
							src={albumDetails.images[1].url}
							alt=""
							width="175px"
							className="rounded-xl mr-5"
						/>

						<div className="flex flex-col">
							<span className="text-gray-500 font-bold">
								{albumDetails.album_type}
							</span>
							<span className="text-gray-100 font-bold text-3xl">
								{albumDetails.name}
							</span>
							<span className="text-gray-400 text-lg">
								by <span className="font-bold">{albumDetails.artists[0].name}</span>
							</span>
						</div>
					</div>

					<span className="text-gray-50 font-bold text-lg mb-5">Track List</span>
					<div
						className="flex flex-col w-full pr-4"
						style={{ maxHeight: "400px", overflowY: "scroll" }}
					>
						{albumDetails.tracks.items.map((item, index) => {
							return (
								<div
									className="flex flex-row w-full items-center justify-between p-4"
									style={{
										borderBottom:
											index !== albumDetails.tracks.items.length - 1
												? "0.5px solid rgb(55,55,55)"
												: "",
									}}
								>
									<span className="text-gray-500 text-sm" style={{ minWidth: "50px" }}>
										{index + 1}
									</span>
									<span className="text-gray-50 w-full text-sm">{item.name}</span>
									<span className="text-gray-500 text-sm" style={{ minWidth: "100px" }}>
										{moment(item.duration_ms).format("mm:ss")}
									</span>
								</div>
							);
						})}
					</div>
				</>
			)}
		</motion.div>
	);
}
const clickOutsideConfig = {
	handleClickOutside: () => Content.handleClickOutside,
};
export default onClickOutside(Content, clickOutsideConfig);
