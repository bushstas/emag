import React from 'react';
import {Translate} from 'uiex/Translate';
import {AsyncAction} from 'uiex/AsyncAction';
import {DataProvider} from 'uiex/DataProvider';
import {Spinner} from 'uiex/Spinner';
import {Button} from 'uiex/Button';
import {Info} from './components/info';

import './style.scss';

export class Home extends React.PureComponent {
	state = {
		requested: false,
		success: false,
		failure: null,
		error: null
	};

	handleStartTravel = () => {

	}

	handleSuccessTravel = (data) => {
		this.setState({
			requested: true,
			success: true
		});
	}

	handleFailureTravel = (err) => {
		this.setState({
			requested: true,
			failure: true
		});
	}

	handleErrorTravel = (err) => {
		this.setState({
			requested: true,
			error: true
		});
	}

	render() {
		const {requested, success} = this.state;
		return (
			<div className="travel-container">
				<div className="travel-container-inner">
					{!requested &&
						<AsyncAction
							url="http://emag.ru/api/travel.php"
							dataFieldName="data"
							successFlagName="success"
							addToStoreAs="travel"
							onStart={this.handleStartTravel}
							onSuccess={this.handleSuccessTravel}
							onFailure={this.handleFailureTravel}
							onError={this.handleErrorTravel}
						>
							<Button>
								<Translate>
									travel
								</Translate>
							</Button>
						</AsyncAction>
					}
					{success && 
						<DataProvider
							storeName="travel"
							component={Info}
						/>
					}
				</div>
			</div>
		)
	}
}