import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoadingPage from './pages/loadingPage';
import './App.scss';
const Login = lazy<any>(() => import('./pages/login'));
const Reset = lazy<any>(() => import('./pages/reset'));
const ConfirmationEmail = lazy<any>(() => import('./pages/confirmationEmail'));


const App = () => (
	<Suspense fallback={<LoadingPage />}>
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/signin' component={Login} />
					<Route exact path='/reset' component={Reset} />
					<Route exact path='/confirmation' component={ConfirmationEmail} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	</Suspense>
);

export default App;
