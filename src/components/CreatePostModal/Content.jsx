import React, { useState } from "react";
import { motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";
import axios from "axios";

function Content({ setShowModal }) {
	const [text, setText] = useState("");

	const createPost = async () => {
		let response = await axios
			.post(
				"http://localhost:8081/posts/addPost",
				{ text },
				{ withCredentials: true }
			)
			.catch((err) => console.log(err));

		console.log(response.data);
	};

	Content.handleClickOutside = () => setShowModal(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
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
				width: "700px",
			}}
		>
			<div className="flex flex-col w-full">
				<span className="text-sm text-gray-400">Select Album</span>
				<input className="w-full mb-3" />

				<span className="text-sm text-gray-400">Select Track</span>
				<input className="w-full" />

				<span className="text-sm text-gray-400">Post content</span>
				<textarea
					rows="3"
					className="w-full p-3"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>

				<div className="flex flex-row items-center justify-end w-full mt-5">
					<button className="secondary mr-2" onClick={() => setShowModal(false)}>
						Close
					</button>
					<button className="primary" onClick={createPost}>
						Post Comment
					</button>
				</div>
			</div>
		</motion.div>
	);
}
const clickOutsideConfig = {
	handleClickOutside: () => Content.handleClickOutside,
};
export default onClickOutside(Content, clickOutsideConfig);
