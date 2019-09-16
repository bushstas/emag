import React from 'react';
import {App} from 'uiex/App';
import {AppPage} from 'uiex/AppPage';
import {Home} from 'pages/Home';
import './style.scss';

export default class Game extends React.Component {
	render() {
		return (
			<App
				className="main-content"
				hashRouting
			>
				<AppPage
					name="home"
					path="home"
					component={Home}
					indexPage
				/>
			</App>
		)
	}
}