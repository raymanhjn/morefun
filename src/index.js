import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import Store from '../imports/store/store';
import routes from '../imports/routes';

const AppRoot = () => {
	return (
		<div>
			<Provider store={Store}>
				<Router history={browserHistory} routes={routes} />
			</Provider>
		</div>
	);
}


render(
	<AppRoot />,
	document.getElementById('app')
);