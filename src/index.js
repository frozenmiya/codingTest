import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore( reducers );

/*console.log( store.getState() );*/
/*store.subscribe( () => {console.log( store.getState() )} );*/

patientList.getList( ()=>{
	const appElement = document.getElementById('app');
	ReactDOM.render(
		<Provider store={store}>
			< App />
		</Provider>
		, appElement);

	ui.bindEvents();
});

