import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/search" exact component={Search} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
