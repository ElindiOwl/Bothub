import './App.scss';
import './Normalize.scss';
import { AppRoutes } from 'app/router';
import { BrowserRouter } from 'react-router-dom';


export const App = () => {

	return (
		<>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>
	);
};

