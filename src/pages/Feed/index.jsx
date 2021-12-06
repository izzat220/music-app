import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import Sidebar from "../../components/Sidebar";

const Feed = ({ userInfo }) => {
	const [posts, setPosts] = useState([]);

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
				<Sidebar />

				<div className="flex flex-col m-auto w-full" style={{ maxWidth: "600px" }}>
					{posts.map((post) => (
						<Post post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;
