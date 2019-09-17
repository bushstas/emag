import React from 'react';
import {Translate} from 'uiex/Translate';
import {Unit} from './unit';
import {Action} from './action';

export class BattleField extends React.PureComponent {
	state = {
		action: 0
	}

	handleActionClick = (idx) => {
		this.setState({action: idx});
	}

	handleEnemyClick = (idx) => {
		alert(idx)
	}

	renderEnemy = (data, idx) => {
		const battle = this.props.getFromStore('battle', {});
		const {turn, units} = battle;
		let distance, reachable;
		if (typeof turn == 'number') {
			const unit = units[turn];
			if (unit) {
				const {x: unitX, y: unitY, actions} = unit;
				const {x: enemyX, y: enemyY} = data;
				const dx = Math.abs(unitX - enemyX);
				const dy = Math.abs(unitY - enemyY);
				distance = Math.round(Math.sqrt(dx * dx + dy * dy));
				const action = actions[this.state.action];
				if (action) {
					const {id} = action;
					if (id === 'walk' && distance > 1) {
						reachable = true;
					}
				}
			}
		}
		return (
			<Unit
				key={idx}
				index={idx}
				{...data}
				distance={distance}
				reachable={reachable}
				onClick={this.handleEnemyClick}
			/>
		);
	}

	renderUnit = (data, idx) => {
		const battle = this.props.getFromStore('battle', {});
		const {turn} = battle;
		return (
			<Unit
				key={idx}
				{...data}
				active={idx === turn}
			/>
		);	
	}

	renderAction = (data, idx) => {
		return (
			<Action
				key={idx}
				{...data}
				index={idx}
				active={idx === this.state.action}
				onClick={this.handleActionClick}
			/>
		);	
	}

	renderEnemies() {
		const battle = this.props.getFromStore('battle', {});
		const {enemies} = battle;
		return (
			<div className="battle-field-enemies">
				{enemies instanceof Array && enemies.map(this.renderEnemy)}
			</div>
		);
	}

	renderUnits() {
		const battle = this.props.getFromStore('battle', {});
		const {units} = battle;
		return (
			<div className="battle-field-units">
				{units instanceof Array && units.map(this.renderUnit)}
			</div>
		);
	}

	renderActions() {
		const battle = this.props.getFromStore('battle', {});
		const {units, turn} = battle;
		if (typeof turn == 'number') {
			const unit = units[turn];
			if (unit) {
				const {actions} = unit;
				return (
					<div className="battle-field-actions">
						{actions instanceof Array && actions.map(this.renderAction)}
					</div>
				);
			}
		}
		return null;
	}

	render() {
		const battle = this.props.getFromStore('battle', {});
		const {enemies} = battle;
		
		return (
			<div className="battle-field">
				{this.renderUnits()}
				{this.renderActions()}
				{this.renderEnemies()}
			</div>
		);
	}
}