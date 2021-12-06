import { motion } from "framer-motion";

const Toast = ({ title, text }) => {
	return (
		<motion.div
			className="flex flex-row items-center rounded-lg fixed z-50 shadow-xl p-5 border-r-2 border-purple-400"
			style={{
				minWidth: "300px",
				bottom: "20px",
				right: "20px",
				backgroundColor: "rgb(30,30,30)",
			}}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: "anticipate", duration: 0.5 }}
			exit={{
				opacity: 0,
				y: 20,
				transition: { ease: "easeOut", duration: 0.2 },
			}}
		>
			<i className="fas fa-check text-purple-400 text-3xl mr-5" />
			<div className="flex flex-col ">
				<span className="text-gray-200 font-bold">{title}</span>
				<span className="text-gray-400 font-semibold text-sm">{text}</span>
			</div>
		</motion.div>
	);
};

export default Toast;
