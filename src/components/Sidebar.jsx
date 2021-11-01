const Sidebar = () => {
	return (
		<div className="flex flex-col mr-10" style={{ width: "200px" }}>
			<span className="bg-gray-100 rounded-xl p-3 font-bold text-purple-700 mb-2 cursor-pointer">
				<i className="fas fa-home mr-3" />
				Your Feed
			</span>
			<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-100 mb-2 cursor-pointer">
				<i className="fas fa-user mr-3" />
				Profile
			</span>
			<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-100 mb-2 cursor-pointer">
				<i className="fas fa-search mr-3" />
				Search
			</span>
			<span className="rounded-xl p-3 font-bold text-gray-500 hover:bg-gray-100 mb-2 cursor-pointer">
				<i className="fas fa-bell mr-3" />
				Notifications
			</span>
		</div>
	);
};

export default Sidebar;