import LoginModal from "./LoginModal/index";
import { useState } from "react";

const Navbar = ({ loggedUser }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div
			className="w-full p-8 flex flex-row items-center justify-between m-auto"
			style={{ maxWidth: "1366px" }}
		>
			<span className="font-bold" style={{ color: "hsl(317, 100%, 54%)" }}>
				Music App
			</span>
			<div className="flex flex-row items-center justify-between">
				<span className="text-gray-300 font-bold mr-4">Home</span>
				<span className="text-gray-300 font-bold mr-4">About</span>
				<span className="text-gray-300 font-bold">Developer</span>
				{!loggedUser.username && (
					<>
						<button class="secondary mr-2">Signup</button>

						<span style={{ color: "hsl(317, 100%, 54%)" }}>Login</span>
						<button onClick={() => setShowModal(true)} className="primary">
							Login
						</button>

						<LoginModal showModal={showModal} setShowModal={setShowModal} />
					</>
				)}

				{loggedUser.username && (
					<>
						<span
							onClick={() => setShowModal(true)}
							className="font-bold"
							style={{ color: "hsl(317, 100%, 54%)" }}
						>
							Logout
						</span>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
