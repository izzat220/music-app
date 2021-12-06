import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import Sidebar from "../../components/Sidebar";
import Toast from "../../components/Toast";

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const Profile = ({ user }) => {
	const [showSuccess, setShowSuccess] = useState(false);

	const [userInfo, setUserInfo] = useState();

	const [displayName, setDisplayName] = useState();
	const [email, setEmail] = useState();

	const [editField, setEditField] = useState(null);

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
			<div className="flex flex-row w-full">
				<Sidebar />

				{!userInfo && <span>Loading</span>}

				{userInfo && (
					<>
						<div
							className="flex flex-col m-auto w-full"
							style={{ maxWidth: "600px" }}
						>
							<div
								className="flex flex-col  w-full p-5 text-gray-200 rounded-xl"
								style={{
									backgroundColor: "rgb(30,30,30)",
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
						</div>
					</>
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
