import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Toast from "../../components/Toast";
import Loading from "../../components/Loading";

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const Profile = ({ user }) => {
	const [showSuccess, setShowSuccess] = useState(false);
	const [userInfo, setUserInfo] = useState();
	const [displayName, setDisplayName] = useState();
	const [email, setEmail] = useState();
	const [editField, setEditField] = useState(null);
	const [albums, setAlbums] = useState();

	const getUserInfo = async () => {
		let response = await axios
			.get("http://localhost:8081/users/getUser", {
				params: { name: user.username },
				withCredentials: true,
			})
			.catch((err) => console.log(err));

		setUserInfo(response.data);
		setDisplayName(response.data.displayName);
		setEmail(response.data.email);

		await getUserAlbums();
	};

	const getUserAlbums = async () => {
		let response = await axios
			.get("http://localhost:8081/albums/getUserAlbumsWithDetails", {
				withCredentials: true,
			})
			.catch((err) => console.log(err));
		setAlbums(response.data);
	};

	const removeAlbum = async (albumId, index) => {
		let response = await axios
			.post(
				"http://localhost:8081/albums/unlikeAlbum",
				{ albumId },
				{ withCredentials: true }
			)
			.catch((err) => console.log(err));

		let array = albums.map((item) => item);
		array.splice(index, 1);
		setAlbums(array);
	};

	const updateProfile = async () => {
		let response = await axios
			.post(
				"http://localhost:8081/users/updateUser",
				{
					displayName,
					email,
				},
				{ withCredentials: true }
			)
			.catch((err) => console.log(err));

		if (response.status === 200) {
			console.log("DONE");
			setEditField(null);
			setShowSuccess(true);
			await sleep(2000);
			setShowSuccess(false);
		}
	};

	const changePassword = async () => {};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full ">
				<Sidebar />

				{!userInfo && <span>Loading</span>}

				{userInfo ? (
					<>
						<div
							className="flex flex-col m-auto w-full mb-20"
							style={{ maxWidth: "600px" }}
						>
							<div
								className="flex flex-col  w-full p-5 text-gray-200 rounded-xl mb-8"
								style={{
									backgroundColor: "rgb(33,33,33)",
									borderColor: "rgb(30,30,30)",
								}}
							>
								<div className="flex flex-row items-center justify-between mb-7">
									<div className="flex flex-col">
										<span className="text-gray-500 text-xs font-bold">Username</span>
										<span className="text-lg font-bold">{userInfo.username}</span>
									</div>
								</div>
								<div className="flex flex-row items-center justify-between mb-7">
									{editField === "display name" && (
										<>
											<div className="flex flex-col w-80">
												<input
													className="w-full"
													value={displayName}
													onChange={(e) => setDisplayName(e.target.value)}
												/>
											</div>

											<div className="flex flex-row">
												<button
													className="secondary mr-2"
													onClick={() => {
														setDisplayName(userInfo.displayName);
														setEditField(null);
													}}
												>
													Cancel
												</button>

												<button
													className="primary"
													onClick={async () => {
														setEditField(false);
														updateProfile();
													}}
												>
													<i className="fas fa-save mr-2" />
													Save
												</button>
											</div>
										</>
									)}

									{editField !== "display name" && (
										<>
											<div className="flex flex-col">
												<span className="text-gray-500 text-xs font-bold">
													Display Name
												</span>
												<span className="text-lg font-bold">{displayName}</span>
											</div>

											<button
												className="primary"
												onClick={() => setEditField("display name")}
											>
												<i className="fas fa-pen mr-2" />
												Edit
											</button>
										</>
									)}
								</div>

								<div className="flex flex-row items-center justify-between mb-7">
									{editField === "email" && (
										<>
											<div className="flex flex-col w-80">
												<input
													className="w-full"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>

											<div className="flex flex-row">
												<button
													className="secondary mr-2"
													onClick={() => {
														setEmail(userInfo.email);
														setEditField(null);
													}}
												>
													Cancel
												</button>

												<button className="primary" onClick={() => setEditField(null)}>
													<i className="fas fa-save mr-2" />
													Save
												</button>
											</div>
										</>
									)}

									{editField !== "email" && (
										<>
											<div className="flex flex-col">
												<span className="text-gray-500 text-xs font-bold">Email</span>
												<span className="text-lg font-bold">{email}</span>
											</div>

											<button className="primary" onClick={() => setEditField("email")}>
												<i className="fas fa-pen mr-2" />
												Edit
											</button>
										</>
									)}
								</div>
								<div className="flex flex-row items-center justify-between ">
									<div className="flex flex-col">
										<span className="text-gray-500 text-xs font-bold">Password</span>
										<span className="text-xs font-bold">
											<i class="fas fa-circle mr-1" />
											<i class="fas fa-circle mr-1" />
											<i class="fas fa-circle mr-1" />
											<i class="fas fa-circle mr-1" />
											<i class="fas fa-circle mr-1" />
										</span>
									</div>

									<button className="primary">
										<i className="fas fa-pen mr-2" />
										Change
									</button>
								</div>
							</div>

							<div
								className="flex flex-col w-full p-5 text-gray-200 rounded-xl"
								style={{
									backgroundColor: "rgb(30,30,30)",
									borderColor: "rgb(30,30,30)",
								}}
							>
								<div className="flex flex-row w-full items-center justify-between mb-8">
									<span className="text-purple-400 font-bold text-2xl">
										Liked Albums
									</span>

									{/* {albums && <input placeholder="Search Albums" />} */}
								</div>

								<div
									className="flex flex-col pr-8"
									style={{ maxHeight: "400px", overflowY: "scroll" }}
								>
									{!albums ? (
										<div className="flex flex-row w-full items-center justify-center p-5">
											<span>Loading Albums</span>
										</div>
									) : (
										albums.map((album, i) => {
											return (
												<motion.div
													className="flex flex-row w-full items-center justify-between mb-3"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 0.1 * i }}
												>
													<div className="flex flex-row items-center">
														<img
															className="rounded-lg mr-5"
															src={album.images[2].url}
															alt=""
														/>
														<div className="flex flex-col">
															<span className="font-bold text-gray-200">{album.name}</span>
															<span className="text-sm">
																by{" "}
																<span className="text-purple-400 font-bold">
																	{album.artists[0].name}
																</span>
															</span>
														</div>
													</div>

													<button
														className="secondary"
														onClick={() => removeAlbum(album.id, i)}
													>
														Remove
													</button>
												</motion.div>
											);
										})
									)}
								</div>
							</div>
						</div>
					</>
				) : (
					<Loading />
				)}
			</div>

			<AnimatePresence>
				{showSuccess && (
					<Toast title="Success" text="Profile Updated Successfully" />
				)}
			</AnimatePresence>
		</div>
	);
};

export default Profile;
