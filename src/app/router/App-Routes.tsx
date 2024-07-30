import { Route, Routes } from 'react-router-dom';

import { routes } from '../lib/routes.tsx';


export const AppRoutes = () => {
	return (
		<Routes>
			{routes.map(({ element, path }, index) => (
				<Route key={index} element={element} path={path} />
			))}
		</Routes>
	);
};