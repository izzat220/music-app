const Navbar = () => {
	return (
		<div className="shadow-md w-full p-4 flex flex-row items-center justify-between">
			<span></span>

			<div className="flex flex-row items-center">
				<span className="text-gray-500 font-bold mr-4">Home</span>
				<span className="text-gray-500 font-bold mr-4">About</span>
				<span className="text-gray-500 font-bold mr-4">Developer</span>
				<span className="text-gray-500 font-bold mr-4">Sign Up</span>
				<span className="text-purple-700 font-bold mr-4">Login</span>
			</div>
		</div>
	);
};

export default Navbar;
