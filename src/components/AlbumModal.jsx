import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";

function BackDrop() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.5 }}
			transition={{ duration: 0.2 }}
			exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.2 } }}
			className="opacity-50 fixed inset-0 bg-black"
		></motion.div>
	);
}

function AlbumModal() {
	let arr = [1, 2, 3, 4, 5, 6];
	const [showModal, setShowModal] = useState(false);

	AlbumModal.handleClickOutside = () => setShowModal(false);

	return (
		<>
			<button
				onClick={() => setShowModal(true)}
				className="text-sm text-purple-400 border-2 border-purple-400 pl-3 pr-3 rounded-md font-bold hover:text-purple-500 hover:border-purple-500 active:text-purple-600 active:border-purple-600"
			>
				<i class="fas fa-list-ul" />
			</button>

			<AnimatePresence>
				{showModal && (
					<>
						<motion.div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto">
								<motion.div
									initial={{ opacity: 0, y: 200 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ ease: "anticipate", duration: 0.5, delay: 0.2 }}
									exit={{
										opacity: 0,
										y: 100,
										transition: { ease: "anticipate", duration: 0.5 },
									}}
									className="rounded-lg shadow-lg relative flex flex-row items-center w-100 p-10"
									style={{
										backgroundColor: "rgb(46,46,46)",
										width: "850px",
									}}
								>
									<div className="flex flex-row w-full">
										<div class="flex flex-col" style={{ minWidth: "300px" }}>
											<div
												class="flex flex-col rounded-xl mb-5"
												style={{ backgroundColor: "rgb(30,30,30)" }}
											>
												<img
													src="https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8"
													alt=""
													className="rounded-t-xl"
												/>

												<div className="flex flex-col p-4 rounded-b-xl">
													<span className="text-xs text-gray-500">Album</span>
													<span className="font-bold text-gray-200">Crack the Skye</span>
													<span className="text-xs text-gray-500">
														by{" "}
														<span className="text-purple-400 text-xs font-bold">
															Mastodon
														</span>
													</span>
												</div>
											</div>

											<div className="flex flex-row">
												<button className="bg-purple-400 text-black text-sm p-2 rounded-md font-bold  hover:bg-purple-500 active:bg-purple-600 mr-2 w-full">
													Search Albums
												</button>
												<button className="text-purple-400 border-2 border-purple-400 text-sm p-2 rounded-md font-bold  hover:bg-purple-500 active:bg-purple-600">
													Albums
												</button>
											</div>
										</div>

										<div className="flex flex-col w-full ml-7">
											<span className="text-purple-400 text-lg font-bold mb-3">
												Track List
											</span>

											{arr.map((item) => {
												return (
													<div
														className="p-4 w-full rounded-xl mb-2 flex flex-row items-center justify-between"
														style={{ backgroundColor: "rgb(30,30,30)" }}
													>
														<div class="flex flex-row">
															<span className="text-gray-200 mr-4">{item}</span>
															<span className="text-gray-200">The Last Baron</span>
														</div>

														<span className="text-gray-200">03:23</span>
													</div>
												);
											})}
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
						<BackDrop />
					</>
				)}
			</AnimatePresence>
		</>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => AlbumModal.handleClickOutside,
};

export default onClickOutside(AlbumModal, clickOutsideConfig);
