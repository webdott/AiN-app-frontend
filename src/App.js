import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoadingPage from "./pages/loadingPage";

import "./App.scss";

const Login = lazy(() => import("./pages/login"));
const Reset = lazy(() => import("./pages/reset"));
const ConfirmationEmail = lazy(() => import("./pages/confirmationEmail"));

function App() {
	return (
		<Suspense fallback={<LoadingPage />}>
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/signin" component={Login} />
						<Route exact path="/reset" component={Reset} />
						<Route exact path="/confirmation" component={ConfirmationEmail} />
						<Route component={Login} />
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
