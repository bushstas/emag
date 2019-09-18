import React from 'react';
import {App} from 'uiex/App';
import {AppPage} from 'uiex/AppPage';
import {SideMenu} from 'uiex/SideMenu';
import {AsyncLoader} from 'uiex/AsyncLoader';
import {addTranslations} from 'uiex/Translate';
import {Home} from 'pages/Home';
import {Battle} from 'pages/Battle';

import './style.scss';

const TOKEN = 'fuhasuifasidhaisdh';
const urls = [
	'http://emag.ru/api/load.php',
	`http://emag.ru/api/dictionary.php?lang=ru`
];
const addToStoreAs = ['user'];

export default class Game extends React.Component {
	state = {
		location: null
	}

	handleLoad = (data) => {
		const [user, dictionary] = data;
		if (dictionary) {
			addTranslations(dictionary.ru, 'ru');
			addTranslations(dictionary.eng, 'eng');
		}
		const {location} = user;
		this.setState({location});
	}

	renderSideMenu = () => {
		return (
			<SideMenu width={150}>
				SideMenu
			</SideMenu>
		);
	}

	render() {
		const {location} = this.state;
		return (
			<AsyncLoader
				url={urls}
				addToStoreAs={addToStoreAs}
				dataFieldName="data"
				successFlagName="success"
				onSuccess={this.handleLoad}
			>
				<App
					sideMenu={this.renderSideMenu()}
					sideMenuWidth={150}
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