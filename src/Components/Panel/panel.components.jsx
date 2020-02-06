import React, { Component } from 'react';
import { PanelContainer, PanelIcon, Pargaraph, PanelSizer } from './styles';
import {
	faHome,
	faBrain,
	faMobileAlt,
	faAddressCard
} from '@fortawesome/free-solid-svg-icons';

export class Panel extends Component {
	state = {
		finishMount: null,
		disableDelay: null
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ finishMount: 'start' });
		}, 200);
		setTimeout(() => {
			this.setState({ disableDelay: 'disable' });
		}, 1500);
	}

	render() {
		// const { index } = this.props
		return (
			<PanelContainer>
				<PanelSizer show={this.state.finishMount} delay={this.state.disableDelay}>
					<PanelIcon
						icon={faHome}
						show={this.state.finishMount}
						delay={this.state.disableDelay} />
					<Pargaraph
						show={this.state.finishMount}
						delay={this.state.disableDelay}>
						Home
					</Pargaraph>
					<PanelIcon
						icon={faBrain}
						show={this.state.finishMount}
						delay={this.state.disableDelay} />
					<Pargaraph
						show={this.state.finishMount}
						delay={this.state.disableDelay}>
						Skill
					</Pargaraph>
					<PanelIcon
						icon={faMobileAlt}
						show={this.state.finishMount}
						delay={this.state.disableDelay} />
					<Pargaraph
						show={this.state.finishMount}
						delay={this.state.disableDelay}>
						Contact
					</Pargaraph>
					<PanelIcon
						icon={faAddressCard}
						show={this.state.finishMount}
						delay={this.state.disableDelay} />
					<Pargaraph
						show={this.state.finishMount}
						delay={this.state.disableDelay}>
						About
					</Pargaraph>
				</PanelSizer>
			</PanelContainer>
		);
	}
}

export default Panel;
