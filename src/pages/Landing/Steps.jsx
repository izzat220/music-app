import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Steps = () => {
	return (
		<div
			className="w-full"
			style={{ backgroundColor: "rgba(248, 113, 113,10%)" }}
		>
			<div
				className="w-full p-12 m-auto flex flex-row items-center justify-between"
				style={{ width: "1366px" }}
			>
				<Step
					svg="listen.svg"
					title="Listen"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
                convallis lorem."
					index={1}
				/>
				<Step
					svg="like.svg"
					title="Like"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
                convallis lorem."
					index={2}
				/>
				<Step
					svg="share.svg"
					title="Share"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
                convallis lorem."
					index={3}
				/>
			</div>
		</div>
	);
};

export default Steps;

const Step = ({ svg, title, text, index }) => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	const boxVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				type: "spring",

				duration: 1 * index,
			},
		},
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			className="flex flex-row"
			initial="hidden"
			animate={controls}
			variants={boxVariants}
		>
			<img src={svg} alt={svg} width="150px" />
			<div className="flex flex-col ml-5" style={{ width: "200px" }}>
				<span className="font-bold text-xl">{title}</span>
				<p className="text-xs">{text}</p>
			</div>
		</motion.div>
	);
};
