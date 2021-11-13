import React from "react";
import AlbumModal from "../components/AlbumModal";

const Design = () => {
	console.log("Hello World");
	return (
		<div className="p-10">
			<AlbumModal />
			<button className="bg-purple-700 text-white p-2 pr-3 pl-3 rounded-xl font-bold mr-2 hover:bg-purple-800 active:bg-purple-900">
				Primary
			</button>
			<button className="bg-gray-100 text-gray-700 p-2 pr-3 pl-3 rounded-xl font-bold">
				Secondary
			</button>
			<div
				className="flex flex-col rounded-xl cursor-pointer mt-3 shadow-md"
				style={{ width: "300px" }}
			>
				<div className=" bg-purple-400 w-full h-60 rounded-t-xl" />

				<div className="flex flex-col w-full p-5">
					<div className="flex flex-row items-center justify-between w-full">
						<div className="flex flex-col">
							<span class="font-bold text-sm text-purple-700">Mastodon</span>
							<span className="font-bold">Crack The Skye</span>
							<span className="text-gray-500 text-xs">12 Tracks</span>
						</div>

						<button className="bg-purple-700 text-white text-xs p-2 pr-3 pl-3 rounded-xl font-bold mr-2 hover:bg-purple-800 active:bg-purple-900">
							Add to List
						</button>
					</div>
				</div>
			</div>
			<div
				className="flex flex-row mt-3 shadow-md rounded-xl"
				style={{ width: "800px", height: "400px" }}
			>
				<div
					className="flex flex-col  h-full border-r-2"
					style={{ minWidth: "300px" }}
				>
					<img
						src="https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8"
						alt=""
						className="rounded-tl-xl"
					/>

					<div className="flex flex-col w-full p-5">
						<div className="flex flex-row items-center justify-between w-full">
							<div className="flex flex-col">
								<span class="font-bold text-sm text-purple-700">Mastodon</span>
								<span className="font-bold">Crack The Skye</span>
								<span className="text-gray-500 text-xs">12 Tracks</span>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-r-xl w-full h-full" />
			</div>
		</div>
	);
};

export default Design;
