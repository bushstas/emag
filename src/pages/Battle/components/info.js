import React from 'react';
import {Button} from 'uiex/Button';
import {Translate} from 'uiex/Translate';
import {AsyncAction} from 'uiex/AsyncAction';

export class Info extends React.PureComponent {
	render() {
		const travel = this.props.getFromStore('travel', {});
		const {type, text} = travel;
		if (type) {
			return (
				<div>
					<div>
						{text}
					</div>
					<AsyncAction
						url="http://emag.ru/api/start.php"
						dataFieldName="data"
						successFlagName="success"
						addToStoreAs={type}
						onStart={this.handleStartTravel}
						onSuccess={this.handleSuccessTravel}
						onFailure={this.handleFailureTravel}
						onError={this.handleErrorTravel}
					>
						<Button>
							<Translate>
								start
							</Translate>
						</Button>
					</AsyncAction>
				</div>
			);
		}
		return null;
	}
}