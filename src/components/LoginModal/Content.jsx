import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";

function Content({ setShowModal }) {
	Content.handleClickOutside = () => setShowModal(false);

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
				backgroundColor: "rgb(46,46,46)",
				width: "400px",
			}}
		>
			<div className="flex flex-col w-full">
				<div className="flex flex-col w-full items-center mb-12">
					<i className="fas fa-lock text-purple-400 text-6xl" />
				</div>
				<span className="text-gray-400 text-sm font-bold mb-2">Username</span>
				<input className="mb-4 p-3" />

				<span className="text-gray-400 text-sm font-bold mb-2">Password</span>
				<input className="p-3 mb-1" type="password" />
				<span className="mb-7 text-purple-400 text-sm">Forgot your password?</span>

				<button className="primary p-3">Log In</button>
			</div>
		</motion.div>
	);
}
const clickOutsideConfig = {
	handleClickOutside: () => Content.handleClickOutside,
};
export default onClickOutside(Content, clickOutsideConfig);
