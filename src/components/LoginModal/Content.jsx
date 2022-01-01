import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";
import axios from "axios";

function Content({ setShowModal }) {
	Content.handleClickOutside = () => setShowModal(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		let response = await axios
			.post(
				"http://localhost:8081/users/login",
				{
					email,
					password,
				},
				{ withCredentials: true }
			)
			.catch((err) => console.log(err));
		console.log(response.data);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 200 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: "anticipate", duration: 0.5, delay: 0.2 }}
			exit={{
				opacity: 0,
				y: 100,
				transition: { ease: "easeOut", duration: 0.2 },
			}}
			className="rounded-lg shadow-lg relative flex flex-row items-center w-100 p-10"
			style={{
				backgroundColor: "rgb(30,30,30)",
				width: "400px",
			}}
		>
			<div className="flex flex-col w-full">
				<div className="flex flex-col w-full items-center mb-8">
					<i className="fas fa-lock text-purple-400 text-6xl" />
				</div>
				<span className="text-gray-400 text-sm font-bold mb-1">Email</span>
				<input
					className="rounded-lg p-2 text-gray-200 border-2 outline-none focus:border-gray-600 mb-4"
					style={{
						backgroundColor: "rgb(44,44,44)",
						borderColor: "rgb(44,44,44)",
						minWidth: "300px",
					}}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<span className="text-gray-400 text-sm font-bold mb-1">Password</span>
				<input
					className="rounded-lg p-2 text-gray-200 border-2 outline-none focus:border-gray-600 mb-1"
					style={{
						backgroundColor: "rgb(44,44,44)",
						borderColor: "rgb(44,44,44)",
						minWidth: "300px",
					}}
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<span className="mb-7 mt-3 text-gray-400 text-sm">
					Forgot your password?
				</span>

				<button className="primary p-3" onClick={login}>
					Log In
				</button>
			</div>
		</motion.div>
	);
}
const clickOutsideConfig = {
	handleClickOutside: () => Content.handleClickOutside,
};
export default onClickOutside(Content, clickOutsideConfig);
