import { motion } from "framer-motion";

const Loading = () => {
	return (
		<motion.div
			className="w-full flex flex-row items-center justify-center"
			style={{ height: "75vh" }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<span className="text-purple-400 font-bold text-xl">
				<i className="fas fa-music mr-5"></i>
				Loading
			</span>
		</motion.div>
	);
};

export default Loading;
