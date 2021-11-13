import React from "react";
import Sidebar from "../../components/Sidebar";

const Profile = () => {
	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full">
				<Sidebar />

				<div className="flex flex-col m-auto w-full" style={{ maxWidth: "600px" }}>
					<div
						className="flex flex-col w-full p-3 text-gray-300 rounded-xl mb-3"
						style={{
							backgroundColor: "rgb(30,30,30)",
							borderColor: "rgb(30,30,30)",
						}}
					>
						<div className="flex flex-row items-center justify-between mb-5">
							<div className="flex flex-row items-center">
								<div
									className="bg-purple-400 rounded-full mr-2"
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

						<p className="text-sm mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et odio
							quis mi sodales ullamcorper. Aenean non lacus faucibus dolor viverra
							viverra. Nulla risus nulla, tempus vel pellentesque non, placerat nec
							libero. Mauris a sapien pulvinar, dapibus mi quis, tincidunt felis. Proin
							ullamcorper, sem vitae tincidunt tempus, sem erat pretium libero, sed
							hendrerit sem erat efficitur nisi. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos.
						</p>

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
										by <span className="font-bold text-purple-400 text-xs">Mastodon</span>
									</span>
								</div>
							</div>

							<div className="flex flex-col">
								<span className="text-xs text-gray-500">Izzat gave it</span>
								<span>
									<i className="fas fa-star mr-1 text-purple-400" />
									<i className="fas fa-star mr-1 text-purple-400" />
									<i className="fas fa-star mr-1 text-purple-400" />
									<i className="fas fa-star mr-1 text-gray-500" />
									<i className="fas fa-star text-gray-500" />
								</span>
							</div>
						</div>
					</div>

					<div
						className="flex flex-col  w-full p-5 text-gray-200 rounded-xl"
						style={{
							backgroundColor: "rgb(30,30,30)",
							borderColor: "rgb(30,30,30)",
						}}
					>
						<div className="flex flex-row items-center justify-between mb-7">
							<div className="flex flex-col">
								<span className="text-gray-500 text-xs font-bold">Display Name</span>
								<span className="text-lg font-bold">Izzat Alolwani</span>
							</div>

							<button className="primary">
								<i className="fas fa-pen mr-2" />
								Edit
							</button>
						</div>

						<div className="flex flex-row items-center justify-between mb-7">
							<div className="flex flex-col">
								<span className="text-gray-500 text-xs font-bold">Email</span>
								<span className="text-lg font-bold">izzat.alolwani@gmail.com</span>
							</div>

							<button className="primary">
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

							<button className="primary">
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
