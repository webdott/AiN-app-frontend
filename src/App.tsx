import { Suspense, lazy, FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoadingPage from './pages/loadingPage';
import './App.scss';
const Login = lazy<FC>(() => import('./pages/login'));
const Reset = lazy<FC>(() => import('./pages/reset'));
const ConfirmationEmail = lazy<FC>(() => import('./pages/confirmationEmail'));
const DashboardPage = lazy<FC>(() => import('./pages/dashboardPage'));
const NotificationsPage = lazy<FC>(() => import('./pages/notificationsPage'));
const CustomersPage = lazy<FC>(() => import('./pages/customersPage'));
const CustomerProfilePage = lazy<FC>(() => import('./pages/customerProfilePage'));
const ProfilePage = lazy<FC>(() => import('./pages/profilePage'));

const App = () => (
	<Suspense fallback={<LoadingPage />}>
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={DashboardPage} />
					<Route exact path='/signin' component={Login} />
					<Route exact path='/reset' component={Reset} />
					<Route exact path='/confirmation' component={ConfirmationEmail} />
					<Route exact path='/notifications' component={NotificationsPage} />
					<Route exact path='/customers' component={CustomersPage} />
					<Route exact path='/customer/:id' component={CustomerProfilePage} />
					<Route exact path='/profile' component={ProfilePage} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	</Suspense>
);

export default App;
