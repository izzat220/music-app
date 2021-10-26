import React from "react";
import { motion } from "framer-motion";

export default function Modal() {
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

			{showModal && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative w-auto">
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								className=" rounded-lg shadow-lg relative flex flex-row items-center w-100 bg-white p-24"
								style={{ height: "600px" }}
							>
								<img src="login.svg" alt="login.svg" width="400px" />

								<div
									className="flex flex-col w-100 h-100 ml-24 p-5"
									style={{ width: "400px" }}
								>
									<span className="font-bold text-red-400 text-3xl">Create Account</span>
									<span className="mb-10 text-gray-500">
										Discover a new frontier with us today.
									</span>

									<input
										type="email"
										placeholder="Email"
										className="border-2 rounded-lg p-3 focus:border-red-400 outline-none mb-3"
									/>
									<input
										type="password"
										placeholder="Password"
										className="border-2 rounded-lg p-3 focus:border-red-400 outline-none mb-5"
									/>
									<button className="rounded-lg bg-red-400 p-3 outline-none text-white font-bold">
										Login
									</button>
								</div>
							</motion.div>
						</div>
					</motion.div>
					<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</>
	);
}
