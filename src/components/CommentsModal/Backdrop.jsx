import { motion } from "framer-motion";

export default function BackDrop() {
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
