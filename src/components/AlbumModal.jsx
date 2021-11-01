import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AlbumModal() {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setShowModal(true)}
				className="bg-red-400 text-white rounded-lg p-1 pl-2 pr-2 font-bold hover:bg-red-500"
			>
				Log In
			</button>

			<AnimatePresence>
				{showModal && (
					<>
						<motion.div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto">
								<motion.div
									initial={{ opacity: 0, y: 200 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ ease: "anticipate", duration: 0.2 }}
									exit={{
										opacity: 0,
										y: 100,
										transition: { ease: "anticipate", duration: 0.3 },
									}}
									className=" rounded-lg shadow-lg relative flex flex-row items-center w-100 bg-white p-5"
								>
									<div className="flex flex-row">
										<div class="flex flex-col shadow-lg rounded-xl">
											<img
												src="https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8"
												alt=""
												className="rounded-t-xl"
											/>

											<div className="flex flex-col p-4 rounded-b-xl">
												<span className="text-xs text-gray-500">Album</span>
												<span className="font-bold">Crack the Skye</span>
												<span className="text-xs text-gray-500">
													by{" "}
													<span className="text-purple-700 text-xs font-bold">Mastodon</span>
												</span>
											</div>
										</div>

										<div className="flex flex-col">
											{arr.map((i) => {
												return (
													<div className="flex flex-row bg-gray-100 rounded-xl mb-2">
														first
													</div>
												);
											})}
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							transition={{ duration: 0.2 }}
							exit={{ opacity: 0, transition: { duration: 0 } }}
							className="opacity-50 fixed inset-0 z-40 bg-black"
						></motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
