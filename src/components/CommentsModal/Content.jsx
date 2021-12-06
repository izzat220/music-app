import React, { useState } from "react";
import { motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";

function Content({ setShowModal }) {
	let arr = [1, 2];
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
				<div class="flex flex-row items-center justify-between w-full mb-10">
					<span className="text-purple-400 text-2xl font-bold">Comments</span>
					<span className="text-gray-400 text-sm">12 Comments</span>
				</div>
				<div className="flex flex-col w-full mb-10">
					{arr.map((item, index) => {
						return (
							<div className="flex flex-col w-full rounded-xl p-2">
								<div className="flex flex-row items-center justify-between mb-3">
									<div className="flex flex-row items-center">
										<div
											className="bg-gray-700 rounded-full mr-2"
											style={{ height: "40px", width: "40px" }}
										/>

										<span className="font-bold text-sm">Izzat Alolwani</span>
									</div>

									<span className="text-gray-400 text-xs">21/12/2021 12:35</span>
								</div>

								<p className="text-sm">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et odio
									quis mi sodales ullamcorper. Aenean non lacus faucibus dolor viverra
									viverra. Nulla risus nulla, tempus vel pellentesque non, placerat nec
									libero.
								</p>

								{index !== arr.length - 1 && (
									<hr className="border-gray-700 mt-5 mb-5" />
								)}
							</div>
						);
					})}

					<div className="flex flex-row w-full justify-center mt-10">
						<span className="text-purple-400 test-xs font-bold">3 more comments</span>
					</div>
				</div>

				<textarea rows="3" className="w-full p-3" />

				<div className="flex flex-row items-center justify-end w-full mt-5">
					<button className="secondary mr-2" onClick={() => setShowModal(false)}>
						Close
					</button>
					<button className="primary">Post Comment</button>
				</div>
			</div>
		</motion.div>
	);
}
const clickOutsideConfig = {
	handleClickOutside: () => Content.handleClickOutside,
};
export default onClickOutside(Content, clickOutsideConfig);
