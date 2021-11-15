import LoginModal from "./LoginModal/index";
import { useState } from "react";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div
			className="shadow-xl w-full pl-8 pr-6 pt-5 pb-5 flex flex-row items-center justify-between"
			style={{ backgroundColor: "rgb(30,30,30)" }}
		>
			<span className="text-purple-400 font-bold">Music App</span>
			<div className="flex flex-row items-center justify-between">
				<span className="text-gray-300 font-bold mr-4">Home</span>
				<span className="text-gray-300 font-bold mr-4">About</span>
				<span className="text-gray-300 font-bold mr-4">Developer</span>
				<button class="secondary mr-2">Signup</button>

				<button onClick={() => setShowModal(true)} className="primary">
					Login
				</button>

				<LoginModal showModal={showModal} setShowModal={setShowModal} />
			</div>
		</div>
	);
};

export default Navbar;
