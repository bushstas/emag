import React from 'react';
import {Translate} from 'uiex/Translate';
import {AsyncAction} from 'uiex/AsyncAction';
import {DataProvider} from 'uiex/DataProvider';
import {Spinner} from 'uiex/Spinner';
import {Button} from 'uiex/Button';
import {Info} from './components/info';

import './style.scss';

export class Battle extends React.PureComponent {
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

	render() {alert(546)
		const {requested, success} = this.state;
		return (
			<div className="battle-container">
				<div className="battle-container-inner">
					Battle
				</div>
			</div>
		)
	}
}