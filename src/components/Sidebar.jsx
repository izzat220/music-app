import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

const Sidebar = () => {
	const [showCreatePostModal, setShowCreatePostModal] = useState(false);

	return (
		<div className="flex flex-col mr-10" style={{ width: "200px" }}>
			{/* <button
				className="primary mb-24"
				onClick={() => setShowCreatePostModal(true)}
			>
				<i className="fas fa-pen mr-2" />
				Create Post
			</button> */}

			<span
				className="rounded-xl p-3 font-bold text-purple-400 mb-2 cursor-pointer"
				style={{ backgroundColor: "rgb(46,46,46)" }}
			>
				<i className="fas fa-home mr-3" />
				Your Feed
			</span>
			<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-800 mb-2 cursor-pointer">
				<i className="fas fa-user mr-3" />
				Profile
			</span>
			<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-800 mb-2 cursor-pointer">
				<i className="fas fa-search mr-3" />
				Search
			</span>
			<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-800 mb-2 cursor-pointer">
				<i className="fas fa-bell mr-3" />
				Notifications
			</span>

			<CreatePostModal
				showModal={showCreatePostModal}
				setShowModal={setShowCreatePostModal}
			/>
		</div>
	);
};

export default Sidebar;
