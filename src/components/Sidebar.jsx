import { useState } from "react";
import { NavLink } from "react-router-dom";
import CreatePostModal from "./CreatePostModal";

const Sidebar = () => {
	const [showCreatePostModal, setShowCreatePostModal] = useState(false);

	return (
		// <div className="flex flex-col mr-10" style={{ minWidth: "200px" }}>
		// 	{/* <button
		// 		className="primary mb-24"
		// 		onClick={() => setShowCreatePostModal(true)}
		// 	>
		// 		<i className="fas fa-pen mr-2" />
		// 		Create Post
		// 	</button> */}

		// 	<NavLink
		// 		to="/feed"
		// 		className={(isActive) =>
		// 			"rounded-xl p-3 font-bold mb-2 cursor-pointer " +
		// 			(isActive ? "text-purple-400" : "text-gray-500 hover:bg-gray-800")
		// 		}
		// 		style={(isActive) => ({
		// 			backgroundColor: isActive ? "rgb(46,46,46)" : "",
		// 		})}
		// 	>
		// 		<i className="fas fa-home mr-3" />
		// 		Your Feed
		// 	</NavLink>

		// 	<NavLink
		// 		to="/profile"
		// 		className={(isActive) =>
		// 			"rounded-xl p-3 font-bold mb-2 cursor-pointer " +
		// 			(isActive ? "text-purple-400" : "text-gray-500 hover:bg-gray-800")
		// 		}
		// 		style={(isActive) => ({
		// 			backgroundColor: isActive ? "rgb(46,46,46)" : "",
		// 		})}
		// 	>
		// 		<i className="fas fa-user mr-3" />
		// 		Profile
		// 	</NavLink>

		// 	<NavLink
		// 		to="/Search"
		// 		className={(isActive) =>
		// 			"rounded-xl p-3 font-bold mb-2 cursor-pointer " +
		// 			(isActive ? "text-purple-400" : "text-gray-500 hover:bg-gray-800")
		// 		}
		// 		style={(isActive) => ({
		// 			backgroundColor: isActive ? "rgb(46,46,46)" : "",
		// 		})}
		// 	>
		// 		<i className="fas fa-search mr-3" />
		// 		Search
		// 	</NavLink>
		// 	<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-800 mb-2 cursor-pointer">
		// 		<i className="fas fa-bell mr-3" />
		// 		Notifications
		// 	</span>

		// 	<CreatePostModal
		// 		showModal={showCreatePostModal}
		// 		setShowModal={setShowCreatePostModal}
		// 	/>
		// </div>

		<div className="col-span-3">
			<div className="flex flex-row items-center mb-6">
				<div
					className="rounded-xl mr-5"
					style={{
						width: "65px",
						height: "65px",
						backgroundColor: "rgb(53,53,53)",
					}}
				/>

				<div className="flex flex-col">
					<span className="text-gray-50 font-bold text-lg">Izzat Alolwani</span>
					<span className="text-gray-500">Avid Listener</span>
				</div>
			</div>
			<div
				class="p-5"
				style={{
					borderRadius: "15px",
					backgroundColor: "rgb(33,33,33)",
				}}
			>
				<div className="flex flex-col w-full ">
					<span
						className="text-black font-bold w-full p-3 rounded-lg mb-5"
						style={{ backgroundColor: "hsl(286, 100%, 54%)" }}
					>
						<i className="fas fa-home mr-5"></i>Feed
					</span>
					<span className="text-gray-400 font-bold w-full p-3 rounded-lg mb-5">
						<i className="fas fa-user mr-5"></i>Profile
					</span>
					<span className="text-gray-400 font-bold w-full p-3 rounded-lg mb-5">
						<i className="fas fa-users mr-5"></i>Friends
					</span>
					<span className="text-gray-400 font-bold w-full p-3 rounded-lg mb-5">
						<i className="fas fa-search mr-5"></i>Discover
					</span>
					<span className="text-gray-400 font-bold w-full p-3 rounded-lg mb-5">
						<i className="fas fa-bell mr-5"></i>Notifications
					</span>
				</div>
			</div>{" "}
		</div>
	);
};

export default Sidebar;
