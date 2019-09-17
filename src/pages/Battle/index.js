import React from 'react';
import {Translate} from 'uiex/Translate';
import {DataProvider} from 'uiex/DataProvider';
import {AsyncLoader} from 'uiex/AsyncLoader';
import {BattleField} from './components/battle-field';

import './style.scss';

export class Battle extends React.PureComponent {
	render() {
		return (
			<AsyncLoader
				url="http://emag.ru/api/load-battle.php"
				addToStoreAs="battle"
				dataFieldName="data"
				successFlagName="success"
			>
				<div className="battle-container">
					<div className="battle-container-inner">
						<DataProvider
							storeName="battle"
							component={BattleField}
						/>
					</div>
				</div>
			</AsyncLoader>
		)
	}
}