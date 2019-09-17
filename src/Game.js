import React from 'react';
import {App} from 'uiex/App';
import {AppPage} from 'uiex/AppPage';
import {SideMenu} from 'uiex/SideMenu';
import {AsyncLoader} from 'uiex/AsyncLoader';
import {Home} from 'pages/Home';
import {Battle} from 'pages/Battle';

import './style.scss';

export default class Game extends React.Component {
	state = {
		lang: 'ru',
		location: null
	}

	handleLoad = (data) => {
		const {location} = data;
		this.setState({location});
	}

	renderSideMenu = () => {
		return (
			<SideMenu width={150}>
				111111
			</SideMenu>
		);
	}

	render() {
		const {lang, location} = this.state;
		return (
			<AsyncLoader
				url="http://emag.ru/api/load.php"
				addToStoreAs="user"
				dataFieldName="data"
				successFlagName="success"
				onSuccess={this.handleLoad}
			>
				<App
					sideMenu={this.renderSideMenu()}
					sideMenuWidth={150}
					loadDictionaryUrl={`http://emag.ru/api/dictionary.php?lang=${lang}`}
					hashRouting
				>
					<AppPage
						name="home"
						path="home"
						component={Home}
						indexPage={location === 'home'}
					/>
					<AppPage
						name="battle"
						path="battle"
						component={Battle}
						indexPage={location === 'battle'}
					/>
				</App>
			</AsyncLoader>
		)
	}
}