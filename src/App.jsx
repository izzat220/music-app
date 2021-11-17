import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Design from "./pages/Design";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

import "./styles/button.css";
import "./styles/input.css";
import { useState, useEffect } from "react";
import axios from "axios";

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
					<Router>
						<Switch>
							<Route path="/" exact component={Landing} />
							<Route path="/search" exact component={Search} />
							<Route path="/design" exact component={Design} />
							<Route path="/profile" exact component={Profile} />
						</Switch>
					</Router>
				</>
			)}
		</div>
	);
}

export default App;
