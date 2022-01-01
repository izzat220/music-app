import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Design from "./pages/Design";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";

import "./styles/button.css";
import "./styles/input.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";

function App() {
	const [loggedUser, setLoggedUser] = useState({});
	const [checkedLogged, setCheckedLogged] = useState(false);

	const checkToken = async () => {
		await axios
			.get("http://localhost:8081/users/checkToken", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response.data);
				setLoggedUser({
					username: response.data.username,
					displayName: response.data.displayName,
				});
			})
			.catch((err) => {
				console.log(err);
			})
			.then(() => {
				setCheckedLogged(true);
			});
	};

	useEffect(() => {
		checkToken();
	}, []);

	return (
		<div className="App">
			{!checkedLogged && <span className="text-xl text-white">Loading</span>}
			{checkedLogged && (
				<>
					<Navbar loggedUser={loggedUser} />

					<div class="grid grid-cols-12 gap-10 p-8 items-start">
						<Sidebar />

						<div class="col-span-9 pr-5">
							<Router>
								<Switch>
									<Route path="/" exact>
										<Landing user={loggedUser} />
									</Route>
									<Route path="/search" exact>
										<Search user={loggedUser} />
									</Route>
									<Route path="/feed" exact component={Feed} />
									<Route path="/design" exact component={Design} />
									<Route path="/profile" exact>
										<Profile user={loggedUser} />
									</Route>
								</Switch>
							</Router>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
