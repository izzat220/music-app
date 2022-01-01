import React, { useState } from "react";
import CommentsModal from "./CommentsModal";
import moment from "moment";
import { motion } from "framer-motion";

const Post = ({ post, index }) => {
	const [showComments, setShowComments] = useState(false);

	return (
		<motion.div
			className="flex flex-col w-full p-5 text-gray-300 rounded-xl mb-8"
			style={{
				backgroundColor: "rgb(30,30,30)",
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1 * index }}
		>
			<div className="flex flex-row items-center justify-between mb-5">
				<div className="flex flex-row items-center">
					<div
						className="bg-gray-700 rounded-full mr-2"
						style={{ height: "50px", width: "50px" }}
					/>
					<div className="flex flex-col">
						<span className="font-bold">{post.displayName}</span>
						<span className="text-gray-400 text-sm">{post.username}</span>
					</div>
				</div>

				<div className="flex flex-row items-center rounded-xl">
					<i className="fas fa-heart mr-2" style={{ color: "rgb(200,20,255)" }} />
					{/* <span className="mr-4">Likes</span> */}
					{/* <span>{post.likes}</span> */}

					{/* <div
						className="rounded-xl p-2 text-xs font-bold"
						style={{ backgroundColor: "rgb(46,46,46)" }}
						onClick={() => setShowComments(true)}
					> */}
					<i className="fas fa-comment mr-2" />
					{/* <span className="mr-4">Comments</span>
						<span>22</span> */}
					{/* </div> */}
				</div>
			</div>

			<p className="mb-1">{post.text}</p>

			<div className="flex flex-row w-full justify-end mb-4">
				<span className="text-gray-400 text-xs">
					- Posted On {moment(post.postedOn).format("DD/MM/YYYY HH:mm")}
				</span>
			</div>

			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center">
					<img
						src="https://i.scdn.co/image/ab67616d00001e02ac79283ccb6d08af31fd33d8"
						alt=""
						width="64px"
						height="64px"
						className="rounded-lg mr-3"
					/>

					<div className="flex flex-col">
						<span className="text-xs text-gray-500">Listening to</span>
						<span className="font-bold">The Last Baron</span>
						<span className="text-xs text-gray-500">
							{/* by <span className="font-bold text-purple-400 text-xs">Mastodon</span> */}
						</span>
					</div>
				</div>

				<div className="flex flex-col">
					<span className="text-xs text-gray-500">{post.displayName} gave it</span>
					{/* <span>
						<i className="fas fa-star mr-1 text-purple-400" />
						<i className="fas fa-star mr-1 text-purple-400" />
						<i className="fas fa-star mr-1 text-purple-400" />
						<i className="fas fa-star mr-1 text-gray-500" />
						<i className="fas fa-star text-gray-500" />
					</span> */}
				</div>
			</div>

			<CommentsModal showModal={showComments} setShowModal={setShowComments} />
		</motion.div>
	);
};

export default Post;
