import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Post from "../../components/Post";
import Sidebar from "../../components/Sidebar";

const Feed = ({ userInfo }) => {
	const [posts, setPosts] = useState();

	const fetchPosts = async () => {
		let response = await axios
			.get("http://localhost:8081/posts/getPosts", {
				withCredentials: true,
			})
			.catch((err) => console.log(err));

		console.log(response.data);
		setPosts(response.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full">
				<div className="flex flex-col" style={{ width: "200px" }}>
					<Sidebar />
					<button className="primary w-full mt-20">
						<i className="fas fa-pen mr-2" />
						Create Post
					</button>
				</div>

				{posts ? (
					<div className="flex flex-col m-auto w-full" style={{ maxWidth: "600px" }}>
						{posts.map((post, index) => (
							<Post post={post} index={index} />
						))}
					</div>
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
};

export default Feed;
