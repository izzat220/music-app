import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Design from "./pages/Design";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

import "./styles/button.css";
import "./styles/input.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/search" exact component={Search} />
					<Route path="/design" exact component={Design} />
					<Route path="/profile" exact component={Profile} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
