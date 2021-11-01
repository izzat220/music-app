import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";

const Profile = () => {
	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full">
				<Sidebar />

				<div className="flex flex-col m-auto w-full" style={{ maxWidth: "600px" }}>
					<div className="grid grid-cols-3 gap-3 mb-3">
						<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl">
							<div className="flex flex-row items-center mb-10">
								<i className="fas fa-music text-3xl text-purple-700 mr-3" />
								<span className="font-bold text-purple-700">Songs</span>
							</div>
							<div className="flex flex-row justify-end">
								<span className="bg-purple-700 rounded-lg p-1 font-bold text-white text-xs">
									22 Tracks
								</span>
							</div>
						</div>
						<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl">
							<div className="flex flex-row items-center mb-10">
								<i className="fas fa-music text-3xl text-purple-700 mr-3" />
								<span className="font-bold text-purple-700">Songs</span>
							</div>
							<div className="flex flex-row justify-end">
								<span className="bg-purple-700 rounded-lg p-1 font-bold text-white text-xs">
									22 Tracks
								</span>
							</div>
						</div>
						<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl">
							<div className="flex flex-row items-center mb-10">
								<i className="fas fa-music text-3xl text-purple-700 mr-3" />
								<span className="font-bold text-purple-700">Songs</span>
							</div>
							<div className="flex flex-row justify-end">
								<span className="bg-purple-700 rounded-lg p-1 font-bold text-white text-xs">
									22 Tracks
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl mb-3">
						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-center">
								<div
									className="bg-purple-200 rounded-full mr-2"
									style={{ height: "50px", width: "50px" }}
								/>
								<div className="flex flex-col">
									<span className="text-gray-500 text-xs">Avid Listener</span>
									<span className="font-bold">Izzat Alolwani</span>
								</div>
							</div>

							<div className="flex flex-row items-center">
								<i className="fas fa-heart text-gray-500 mr-2" />
								<i className="fas fa-comment text-gray-500" />
							</div>
						</div>

						<hr className="w-full mt-3 mb-3" />

						<p className="text-sm mb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et odio
							quis mi sodales ullamcorper. Aenean non lacus faucibus dolor viverra
							viverra. Nulla risus nulla, tempus vel pellentesque non, placerat nec
							libero. Mauris a sapien pulvinar, dapibus mi quis, tincidunt felis. Proin
							ullamcorper, sem vitae tincidunt tempus, sem erat pretium libero, sed
							hendrerit sem erat efficitur nisi. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos.
						</p>

						<hr className="w-full mt-3 mb-3" />

						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-center">
								<img
									src="https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8"
									alt=""
									width="64px"
									height="64px"
									className="rounded-lg mr-3"
								/>

								<div className="flex flex-col">
									<span className="text-xs text-gray-500">Listening to</span>
									<span className="font-bold">The Last Baron</span>
									<span className="text-xs text-gray-500">
										by <span className="font-bold text-purple-700 text-xs">Mastodon</span>
									</span>
								</div>
							</div>

							<div className="flex flex-col">
								<span className="text-xs text-gray-500">Izzat gave it</span>
								<span>
									<i className="fas fa-star mr-1 text-purple-700" />
									<i className="fas fa-star mr-1 text-purple-700" />
									<i className="fas fa-star mr-1 text-purple-700" />
									<i className="fas fa-star mr-1 text-gray-500" />
									<i className="fas fa-star text-gray-500" />
								</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-3 mb-3">
						<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl">
							<div className="flex flex-row items-center mb-10">
								<i className="fas fa-music text-3xl text-purple-700 mr-3" />
								<span className="font-bold text-purple-700">Songs</span>
							</div>
							<div className="flex flex-row justify-end">
								<span className="bg-purple-700 rounded-lg p-1 font-bold text-white text-xs">
									22 Tracks
								</span>
							</div>
						</div>
						<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl">
							<div className="flex flex-row items-center mb-10">
								<i className="fas fa-music text-3xl text-purple-700 mr-3" />
								<span className="font-bold text-purple-700">Songs</span>
							</div>
							<div className="flex flex-row justify-end">
								<span className="bg-purple-700 rounded-lg p-1 font-bold text-white text-xs">
									22 Tracks
								</span>
							</div>
						</div>
						<div className="flex flex-col w-full p-3 bg-gray-100 rounded-xl">
							<div className="flex flex-row items-center mb-10">
								<i className="fas fa-music text-3xl text-purple-700 mr-3" />
								<span className="font-bold text-purple-700">Songs</span>
							</div>
							<div className="flex flex-row justify-end">
								<span className="bg-purple-700 rounded-lg p-1 font-bold text-white text-xs">
									22 Tracks
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col  w-full p-5 bg-gray-100 rounded-xl">
						<div className="flex flex-row items-center justify-between mb-7">
							<div className="flex flex-col">
								<span className="text-gray-500 text-xs font-bold">Display Name</span>
								<span className="text-lg font-bold">Izzat Alolwani</span>
							</div>

							<button className="bg-purple-700 text-white text-sm p-2 rounded-md font-bold mr-2 hover:bg-purple-800 active:bg-purple-900">
								<i className="fas fa-pen mr-2" />
								Edit
							</button>
						</div>

						<div className="flex flex-row items-center justify-between mb-7">
							<div className="flex flex-col">
								<span className="text-gray-500 text-xs font-bold">Email</span>
								<span className="text-lg font-bold">izzat.alolwani@gmail.com</span>
							</div>

							<button className="bg-purple-700 text-white text-sm p-2 rounded-md font-bold mr-2 hover:bg-purple-800 active:bg-purple-900">
								<i className="fas fa-pen mr-2" />
								Edit
							</button>
						</div>
						<div className="flex flex-row items-center justify-between ">
							<div className="flex flex-col">
								<span className="text-gray-500 text-xs font-bold">Password</span>
								<span className="text-xs font-bold">
									<i class="fas fa-circle mr-1" />
									<i class="fas fa-circle mr-1" />
									<i class="fas fa-circle mr-1" />
									<i class="fas fa-circle mr-1" />
									<i class="fas fa-circle mr-1" />
								</span>
							</div>

							<button className="bg-purple-700 text-white text-sm p-2 rounded-md font-bold mr-2 hover:bg-purple-800 active:bg-purple-900">
								<i className="fas fa-pen mr-2" />
								Change
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
