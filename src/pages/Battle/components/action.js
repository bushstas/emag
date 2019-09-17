import React from 'react';

export class Action extends React.PureComponent {
	handleClick = () => {
		const {index, active} = this.props;
		if (!active) {
			this.props.onClick(index);
		}
	}

	render() {
		const {id, active} = this.props;
		const style = {
			backgroundImage: `url(http://emag.ru/images/actions/${id}.png)`
		};
		return (
			<div
				className={`battle-field-action${active ? ' active' : ''}`}
				style={style}
				onClick={this.handleClick}
			>
				{active && <div className="battle-field-action-active" />}
			</div>
		);
	}
}