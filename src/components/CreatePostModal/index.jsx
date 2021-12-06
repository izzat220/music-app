import React, { useState } from "react";
import BackDrop from "./Backdrop";
import Content from "./Content";
import { AnimatePresence, motion } from "framer-motion";

function CreatePostModal({ showModal, setShowModal }) {
	return (
		<AnimatePresence>
			{showModal && (
				<>
					<motion.div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto">
							<Content setShowModal={setShowModal} />
						</div>
					</motion.div>
					<BackDrop />
				</>
			)}
		</AnimatePresence>
	);
}

export default CreatePostModal;
