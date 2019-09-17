import React from 'react';

export class Unit extends React.PureComponent {
	handleClick = () => {
		const {reachable, index} = this.props;
		if (reachable) {
			this.props.onClick(index);
		}
	}

	render() {
		const {img, name, active, distance, reachable, chp, hp, level} = this.props;
		const style = {
			backgroundImage: `url(http://emag.ru/images/units/skeletons/${img}.png)`
		};
		let color = 'green';
		if (chp <= hp * 0.2) {
			color = 'red';
		} else if (chp <= hp * 0.5) {
			color = 'orange';
		} else if (chp <= hp * 0.75) {
			color = 'yellow';
		}
		return (
			<div className={`unit-bg${active ? ' active' : ''}`}>
				<div className="unit-name">
					{name} ({level})
				</div>
				<div
					className={`unit${reachable ? ' reachable' : ''}`}
					onClick={this.handleClick}
					style={style}
				>
				</div>
				<div className="unit-info">
					{distance ?
						<div
							className={`unit-distance${reachable ? ' reachable' : ''}`}
							title="Расстояние до противника"
						>
							{distance}
						</div> : <div />
					}
					<div className={`unit-hit-points ${color}`}>
						{chp}
						<span className="unit-hit-points-total">
							/ {hp}
						</span>
					</div>
				</div>
			</div>
		);
	}
}