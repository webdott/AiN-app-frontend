import { FC } from 'react';
import { RouteProps } from 'react-router-dom';
// import { LoginContext } from '../../Contexts/LoginContext';

type ProtectedComponentRouteProps = RouteProps & {
	component: FC;
};

const ProtectedComponentRoute: FC<ProtectedComponentRouteProps> = ({
	component: Component,
	...restProps
}) => {
	// const { loggedInUser } = useContext(LoginContext)!;

	return (
		// <Route
		// 	{...restProps}
		// 	render={(props) => {
		// 		return !!Object.entries(loggedInUser).length ? (
		// 			<Component {...props} />
		// 		) : (
		// 			<Redirect
		// 				to={{
		// 					pathname: '/login',
		// 					state: {
		// 						from: props.location,
		// 					},
		// 				}}
		// 			/>
		// 		);
		// 	}}
		// />
        null
	);
};

export default ProtectedComponentRoute;
