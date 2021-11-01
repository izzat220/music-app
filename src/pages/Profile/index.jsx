import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";

const Profile = () => {
	return (
		<div className="m-auto p-10" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full">
				<Sidebar />
			</div>
		</div>
	);
};

export default Profile;
