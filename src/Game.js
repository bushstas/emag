import React from 'react';
import {App} from 'uiex/App';
import {AppPage} from 'uiex/AppPage';
import {SideMenu} from 'uiex/SideMenu';
import {Home} from 'pages/Home';
import './style.scss';

export default class Game extends React.Component {
	state = {
		lang: 'ru'
	}

	renderSideMenu = () => {
		return (
			<SideMenu width={150}>
				111111
			</SideMenu>
		);
	}

	render() {
		const {lang} = this.state;
		return (
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
					indexPage
				/>
			</App>
		)
	}
}